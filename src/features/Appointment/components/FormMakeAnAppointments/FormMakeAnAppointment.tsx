import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import {
  Button,
  CalendarComponent, CustomLoader,
  Input, NumberCircle, Paragraph, SpanError, SubmitMessage,
} from '../../../../components';
import {
  fetchDoctors,
  fetchFreeTimeSlot,
  fetchSpecializations,
} from '../../redux/appointmentSlice';
import { FormMakeAnAppointmentStyled } from './FormMakeAnAppointment.styled';
import ComponentWrapper from '../ComponentWrapper';
import NumberCircleWrapper from '../NumberCircleWrapper';
import { DICTIONARY } from '../../../../core/consts/dictionary';
import InputWrapper from '../../../../layouts/InputWrapper';
import { CustomSelect } from '../../../../components/CustomSelect';
import { useAppSelector } from '../../../../store';
import TimeSlotContainer from '../TimeSlotContainer';
import TimeSlot from '../TimeSlot';
import { formatDay } from '../../../../helpers/formatDay';
import { TIME_SLOT } from '../../../../core/consts/timeslot';
import { FormStyled } from '../../../../components/Form/Form.styled';
import { FormMakeAppointmentsProps } from './types';

const FormMakeAnAppointment: React.FC<FormMakeAppointmentsProps> = ({ onSubmit }) => {
  const {
    control, setValue, getValues, reset, formState: {
      errors, dirtyFields,
    }, handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpecializations());
  }, [dispatch]);
  const specializations = useAppSelector((state) => state.appointment.specializations);
  const optionsSpecialization = specializations.map(({ id, specialization_name }) => ({
    value: id,
    label: specialization_name,
  }));

  const doctors = useAppSelector((state) => state.appointment.doctors);
  const doctorsOptions = doctors?.map(({ first_name, id, last_name }) => ({
    value: id,
    label: `${first_name} ${last_name}`,
  }));

  const timeSlots = useAppSelector((state) => state.appointment.timeSlots);
  const freeTimeSlots = timeSlots.map((item) => moment(item).format('HH:mm:ss.SSS[Z]'));
  const makeAppointmentStatus = useAppSelector((state) => state.appointment.makeAppointmentStatus);
  const error = useAppSelector((state) => state.appointment.error);
  return (
    <FormStyled
      variant="makeAppointment"
      onSubmit={handleSubmit(({
        reason, note, timeSlot, calendar, doctorsName,
      }) => {
        const params = {
          date: formatDay(calendar).substring(0, 11).concat(timeSlot),
          reason,
          note,
          doctorID: doctorsName.value,
        };
        onSubmit(params);
        reset();
      })}
    >
      {makeAppointmentStatus === 'pending' ? <CustomLoader />
        : (
          <FormMakeAnAppointmentStyled>
            <ComponentWrapper>
              <NumberCircleWrapper>
                <NumberCircle>1</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectDoctor}</Paragraph>
              </NumberCircleWrapper>
              <InputWrapper>
                <Paragraph variant="caption">{DICTIONARY.createAppointmentLabels.occupation}</Paragraph>
                <Controller
                  name="occupation"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { ref, value, onChange },
                  }) => (
                    <CustomSelect
                      innerRef={ref}
                      value={value}
                      onChange={(e: { value: string }) => {
                        onChange(e);
                        setValue('doctorsName', null);
                        setValue('occupation', e);
                        dispatch(fetchDoctors(e.value));
                      }}
                      options={optionsSpecialization}
                      placeholder={DICTIONARY.createAppointmentPlaceholder.occupation}
                    />
                  )}
                />
                {errors.occupation
              && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.occupation}</SpanError>}
              </InputWrapper>
              <InputWrapper>
                <Paragraph variant="caption">{DICTIONARY.createAppointmentLabels.doctorsName}</Paragraph>
                <Controller
                  name="doctorsName"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { ref, onChange, value },
                  }) => (
                    <CustomSelect
                      value={value}
                      innerRef={ref}
                      options={doctorsOptions}
                      onChange={(e: { value: string }) => {
                        onChange(e);
                        setValue('doctorsName', e);
                      }}
                      placeholder={DICTIONARY.createAppointmentPlaceholder.doctorsName}
                    />
                  )}
                />
                {errors.doctorsName
              && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.doctorsName}</SpanError>}
              </InputWrapper>
              <InputWrapper>
                <Paragraph variant="caption">{DICTIONARY.createAppointmentLabels.visitReason}</Paragraph>
                <Controller
                  name="reason"
                  control={control}
                  rules={{ required: true, minLength: 5 }}
                  render={({
                    field: { ref, onChange },
                  }) => (
                    <Input
                      onChange={onChange}
                      inputRef={ref}
                      placeholder={DICTIONARY.createAppointmentPlaceholder.visitReason}
                      variant="makeAppointment"
                    />
                  )}
                />
                {errors.reason
              && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.visitReason}</SpanError>}
              </InputWrapper>
              <InputWrapper>
                <Paragraph variant="caption">{DICTIONARY.createAppointmentLabels.note}</Paragraph>
                <Controller
                  name="note"
                  control={control}
                  rules={{ required: true, minLength: 2 }}
                  render={({
                    field: { ref, onChange },
                  }) => (
                    <Input
                      onChange={onChange}
                      inputRef={ref}
                      placeholder={DICTIONARY.createAppointmentPlaceholder.note}
                      variant="makeAppointment"
                    />
                  )}
                />
                {errors.note
              && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.note}</SpanError>}
              </InputWrapper>
            </ComponentWrapper>
            <ComponentWrapper>
              <NumberCircleWrapper>
                <NumberCircle>2</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectDay}</Paragraph>
              </NumberCircleWrapper>
              <Controller
                name="calendar"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { ref, onChange, value },
                }) => (
                  <CalendarComponent
                    onChange={(e) => {
                      onChange(e);
                      const day = formatDay(e);
                      const idDoctor = getValues('doctorsName.value');
                      dispatch(fetchFreeTimeSlot({ day, idDoctor }));
                      setValue('calendar', e);
                      setValue('timeSlot', null);
                    }}
                    selected={value}
                    inputRef={ref}
                  />
                )}
              />
              {errors.calendar && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointment.selectDay}</SpanError>}
            </ComponentWrapper>
            <ComponentWrapper>
              <NumberCircleWrapper>
                <NumberCircle>3</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectTime}</Paragraph>
              </NumberCircleWrapper>
              <TimeSlotContainer>
                {TIME_SLOT.map((elem) => (
                  <Controller
                    name="timeSlot"
                    key={elem.id}
                    rules={{ required: true }}
                    control={control}
                    render={({
                      field: { onChange },
                    }) => (
                      <TimeSlot
                        status={getValues('doctorsName.value') ? (!!freeTimeSlots.find((timeItem:string) => timeItem === elem.isoTime)) : false}
                        time={elem.time}
                        onClick={(e) => {
                          e.preventDefault();
                          onChange(elem.isoTime);
                          setValue('timeSlot', elem.isoTime);
                        }}
                      />
                    )}
                  />
                ))}
                {errors.timeSlot && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointment.selectTime}</SpanError>}
              </TimeSlotContainer>
              <Button color="primary" disabled={!dirtyFields.timeSlot} group="main">Submit</Button>
            </ComponentWrapper>
            {makeAppointmentStatus === 'fulfilled' && <Redirect to="appointments" /> }
          </FormMakeAnAppointmentStyled>
        )}
      {makeAppointmentStatus === 'rejected' && <SubmitMessage variant="error" typeError={error} /> }
    </FormStyled>
  );
};

export default FormMakeAnAppointment;

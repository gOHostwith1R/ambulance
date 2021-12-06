import React, { useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import FlexContainer from '../../../components/FlexContainer';
import Button from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';
import CustomSelect from '../../../components/CustomSelect';
import { DICTIONARY } from '../../../core/consts/dictionary';
import Input from '../../../components/Input';
import SpanError from '../../../components/SpanError';
import NumberCircle from '../../../components/NumberCircle';
import CalendarComponent from '../../../components/CalendarComponent';
import GridContainer from '../../../components/GridContainer';
import { TIME_SLOT } from '../../../core/consts/timeslot';
import TimeSlot from '../../../components/TimeSlot';
import Form from '../../../components/Form';
import { FormCreateAppointmentsStyled } from './form.create.appointments.styled';
import {
  appointmentSelector, getDoctors, getFreeTime, getSpecializations, makeAppointment,
  setDayVisit, setIsSelectedDoctor,
} from '../../../store/slices/appointmentSlice';
import CustomLoader from '../../../components/Loader';

const FormCreateAppointments = () => {
  const {
    specializations, doctorName, status, dayDoctor,
  } = useSelector(appointmentSelector);
  const dispatch = useDispatch();
  const [doctorsSpecialization, setDoctorsSpecialization] = useState('');
  const [isActiveTimeSlot, setIsActiveTimeSlot] = useState();
  const [choosingTheTime, setChoosingTheTime] = useState('');
  const [checkErrors, setCheckErrors] = useState(false);
  const {
    register, handleSubmit, control, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = dayDoctor.dayVisit.slice(0, 11);
    data.date += choosingTheTime;
    data.doctorID = data.doctorID.id;
    dispatch(makeAppointment(data));
  };

  useMemo(() => {
    if (dayDoctor.isSelectedDoctor.length !== 0 && dayDoctor.dayVisit.length !== 0) {
      dispatch(getFreeTime(dayDoctor));
    }
  }, [dayDoctor.isSelectedDoctor, dayDoctor.dayVisit]);

  useEffect(() => {
    dispatch(getSpecializations());
  }, []);

  const optionsOccupation = specializations.map((item) => ({
    value: item.specialization_name,
    label: item.specialization_name,
    id: item.id,
  }));

  const doctorsOptions = useMemo(() => doctorName.map((doctor) => ({
    label: `${doctor.first_name} ${doctor.last_name}`,
    value: `${doctor.first_name} ${doctor.last_name}`,
    id: doctor.id,
  })), [doctorName]);

  const handleOccupation = (e) => {
    setDoctorsSpecialization(e);
    if (e.value !== dayDoctor.isSelectedDoctor) {
      dispatch(setIsSelectedDoctor(''));
    }
  };

  useEffect(() => {
    dispatch(getDoctors(doctorsSpecialization.id));
  }, [doctorsSpecialization]);

  const handleDoctorsName = (e) => {
    dispatch(setIsSelectedDoctor(e));
  };

  const handleIsActive = (id) => {
    setIsActiveTimeSlot(id);
  };

  const handleTimeSlot = (time) => {
    const timeISO = `${moment(time, ['h:mm A']).format('HH:mm:ss.ms')}0Z`;
    setChoosingTheTime(timeISO);
    console.log(timeISO);
  };

  const handleDay = (day) => {
    dispatch(setDayVisit(day.toISOString()));
  };

  useMemo(() => {
    if (dayDoctor.isSelectedDoctor === '') {
      setCheckErrors(true);
    } else {
      setCheckErrors(false);
    }
  }, [dayDoctor.isSelectedDoctor]);

  return (
    <Form width="100%" overflow="auto" onSubmit={handleSubmit(onSubmit)}>
      {status === 'loading' ? <CustomLoader />
        : (
          <FormCreateAppointmentsStyled>
            <FlexContainer direction="column" gap="32px" alignItems="flex-start">
              <FlexContainer gap="16px">
                <NumberCircle>1</NumberCircle>
                <Paragraph variant="plain-1" font="regular">
                  {DICTIONARY.createAppointment.selectDoctor}
                </Paragraph>
              </FlexContainer>
              <FlexContainer gap="40px" direction="column" alignItems="flex-start">
                <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
                  <Paragraph
                    variant="caption"
                    color="#000000"
                  >
                    {DICTIONARY.createAppointmentLabels.occupation}
                  </Paragraph>
                  <Controller
                    name="occupation"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomSelect
                        {...field}
                        onChange={(e) => {
                          handleOccupation(e);
                          field.onChange(e);
                        }}
                        value={doctorsSpecialization}
                        options={optionsOccupation}
                        placeholder={DICTIONARY.createAppointmentPlaceholder.occupation}
                      />
                    )}
                  />
                  {errors.occupation
                  && <SpanError variant="auth">{DICTIONARY.createAppointmentPlaceholder.occupation}</SpanError>}
                </FlexContainer>
                <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
                  <Paragraph
                    variant="caption"
                    color="#000000"
                  >
                    {DICTIONARY.createAppointmentLabels.doctorsName}
                  </Paragraph>
                  <Controller
                    name="doctorID"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomSelect
                        {...field}
                        onChange={(e) => {
                          handleDoctorsName(e);
                          field.onChange(e);
                        }}
                        value={dayDoctor.isSelectedDoctor}
                        options={doctorsOptions}
                        placeholder={DICTIONARY.createAppointmentPlaceholder.doctorsName}
                      />
                    )}
                  />
                  {errors.doctorID
                  && <SpanError variant="auth">{DICTIONARY.createAppointmentPlaceholder.doctorsName}</SpanError>}
                </FlexContainer>
                <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
                  <Paragraph
                    variant="caption"
                    color="#000000"
                  >
                    {DICTIONARY.createAppointmentLabels.visitReason}
                  </Paragraph>
                  <Input
                    placeholder={DICTIONARY.createAppointmentLabels.visitReason}
                    type="text"
                    name="reason"
                    variant="createAppointments"
                    {...register('reason', { required: true, minLength: 1 })}
                  />
                  {errors.visitReason
                  && <SpanError variant="auth">{DICTIONARY.createAppointmentLabels.visitReason}</SpanError>}
                </FlexContainer>
                <FlexContainer gap="16px" direction="column" alignItems="flex-start">
                  <Paragraph
                    variant="caption"
                    color="#000000"
                  >
                    {DICTIONARY.createAppointmentLabels.note}
                  </Paragraph>
                  <Input
                    placeholder={DICTIONARY.createAppointmentPlaceholder.note}
                    type="text"
                    name="note"
                    variant="createAppointments"
                    {...register('note')}
                  />
                </FlexContainer>
                <Button
                  disabled={checkErrors ? 'disabled' : undefined}
                  variant="contained"
                  color="primary"
                  group="main"
                >
                  Submit
                </Button>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer direction="column" gap="40px" alignItems="flex-start" position="relative">
              <FlexContainer gap="16px">
                <NumberCircle>2</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectDay}</Paragraph>
              </FlexContainer>
              <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                render={({ value, field }) => (
                  <CalendarComponent
                    value={value}
                    onChange={(e) => {
                      field.onChange(e);
                      handleDay(e);
                    }}
                  />
                )}
              />
              {errors.calendar
                    && <SpanError variant="date">{DICTIONARY.createAppointment.selectDay}</SpanError>}
            </FlexContainer>
            <FlexContainer direction="column" gap="40px" alignItems="flex-start">
              <FlexContainer gap="16px">
                <NumberCircle>3</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectTime}</Paragraph>
              </FlexContainer>
              <GridContainer variant="timeSlot" gap="16px">
                {TIME_SLOT.map((elem) => (
                  <Controller
                    name="timeSlot"
                    control={control}
                    key={elem.id}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TimeSlot
                        id={isActiveTimeSlot === elem.id ? isActiveTimeSlot : undefined}
                        status={elem.status}
                        time={elem.time}
                        onClick={(e) => {
                          e.preventDefault();
                          handleIsActive(elem.id);
                          field.onChange(elem.time);
                          handleTimeSlot(elem.time);
                        }}
                      />
                    )}
                  />
                ))}
                {errors.timeSlot
                      && <SpanError variant="calendar">{DICTIONARY.createAppointment.selectTime}</SpanError>}
              </GridContainer>
            </FlexContainer>
          </FormCreateAppointmentsStyled>
        )}
    </Form>
  );
};

export default FormCreateAppointments;

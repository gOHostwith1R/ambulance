import React, { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FlexContainer from '../../../components/FlexContainer';
import Button from '../../../components/Button';
import Paragraph from '../../../components/Paragraph';
import CustomSelect from '../../../components/CustomSelect';
import { DICTIONARY } from '../../../core/consts/dictionary';
import { DOCTORS } from '../../../core/consts/doctors';
import Input from '../../../components/Input';
import SpanError from '../../../components/SpanError';
import { listDoctors } from './list.doctors';
import NumberCircle from '../../../components/NumberCircle';
import CalendarComponent from '../../../components/CalendarComponent';
import GridContainer from '../../../components/GridContainer';
import { TIME_SLOT } from '../../../core/consts/timeslot';
import TimeSlot from '../../../components/TimeSlot';
import Form from '../../../components/Form';
import { FormCreateAppointmentsStyled } from './form.create.appointments.styled';

const FormCreateAppointments = () => {
  const [doctorsSpecialization, setDoctorsSpecialization] = useState('');
  const [doctorsName, setDoctorsName] = useState('');
  const [isActiveTimeSlot, setIsActiveTimeSlot] = useState();
  const [checkErrors, setCheckErrors] = useState(false);
  const {
    register, handleSubmit, control, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const optionsOccupation = DOCTORS.map((item) => ({
    value: item,
    label: item,
  }));

  const doctorsOptions = useMemo(() => {
    const newArray = listDoctors.filter(
      (doctor) => doctor.occupation === doctorsSpecialization.value,
    )
      .map((doctor) => ({
        label: `${doctor.firstName} ${doctor.lastName}`,
        value: `${doctor.firstName} ${doctor.lastName}`,
      }
      ));
    return newArray;
  }, [doctorsSpecialization]);

  const handleOccupation = (e) => {
    setDoctorsSpecialization(e);
    if (e.value !== doctorsName) {
      setDoctorsName('');
    }
  };

  const handleDoctorsName = (e) => {
    setDoctorsName(e);
  };

  const handleIsActive = (id) => {
    setIsActiveTimeSlot(id);
  };

  useMemo(() => {
    if (doctorsName === '') {
      setCheckErrors(true);
    } else {
      setCheckErrors(false);
    }
  }, [doctorsName]);

  return (
    <Form width="100%" overflow="auto" onSubmit={handleSubmit(onSubmit)}>
      <FormCreateAppointmentsStyled>
        <FlexContainer direction="column" gap="40px" alignItems="flex-start" position="relative">
          <FlexContainer gap="16px">
            <NumberCircle>1</NumberCircle>
            <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectDay}</Paragraph>
          </FlexContainer>
          <Controller
            name="calendar"
            control={control}
            rules={{ required: true }}
            render={({ value, field }) => (
              <CalendarComponent
                value={value}
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.calendar && <SpanError variant="calendar">{DICTIONARY.createAppointment.selectDay}</SpanError>}
        </FlexContainer>
        <FlexContainer direction="column" gap="40px" alignItems="flex-start">
          <FlexContainer gap="16px">
            <NumberCircle>2</NumberCircle>
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
                    }}
                  />
                )}
              />
            ))}
            {errors.timeSlot && <SpanError variant="calendar">{DICTIONARY.createAppointment.selectTime}</SpanError>}
          </GridContainer>
        </FlexContainer>
        <FlexContainer direction="column" gap="32px" alignItems="flex-start">
          <FlexContainer gap="16px">
            <NumberCircle>3</NumberCircle>
            <Paragraph variant="plain-1" font="regular">
              {DICTIONARY.createAppointment.selectDoctor}
            </Paragraph>
          </FlexContainer>
          <FlexContainer gap="40px" direction="column" alignItems="flex-start">
            <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
              <Paragraph variant="caption" color="#000000">{DICTIONARY.createAppointmentLabels.occupation}</Paragraph>
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
              {errors.occupation && <SpanError variant="auth">{DICTIONARY.createAppointmentPlaceholder.occupation}</SpanError>}
            </FlexContainer>
            <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
              <Paragraph variant="caption" color="#000000">{DICTIONARY.createAppointmentLabels.doctorsName}</Paragraph>
              <Controller
                name="doctorsName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    onChange={(e) => {
                      handleDoctorsName(e);
                      field.onChange(e);
                    }}
                    value={doctorsName}
                    options={doctorsOptions}
                    placeholder={DICTIONARY.createAppointmentPlaceholder.doctorsName}
                  />
                )}
              />
              {errors.doctorsName && <SpanError variant="auth">{DICTIONARY.createAppointmentPlaceholder.doctorsName}</SpanError>}
            </FlexContainer>
            <FlexContainer gap="16px" direction="column" alignItems="flex-start" position="relative">
              <Paragraph variant="caption" color="#000000">{DICTIONARY.createAppointmentLabels.visitReason}</Paragraph>
              <Input
                placeholder={DICTIONARY.createAppointmentLabels.visitReason}
                type="text"
                name="visitReason"
                variant="createAppointments"
                {...register('visitReason', { required: true, minLength: 1 })}
              />
              {errors.visitReason && <SpanError variant="auth">{DICTIONARY.createAppointmentLabels.visitReason}</SpanError>}
            </FlexContainer>
            <FlexContainer gap="16px" direction="column" alignItems="flex-start">
              <Paragraph variant="caption" color="#000000">{DICTIONARY.createAppointmentLabels.note}</Paragraph>
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
              style={{ alignSelf: 'flex-end' }}
            >
              Submit
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FormCreateAppointmentsStyled>
    </Form>
  );
};

export default FormCreateAppointments;

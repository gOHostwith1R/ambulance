import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import CustomSelect from '../../../../components/CustomSelect';
import { DICTIONARY } from '../../../../core/consts/dictionary';
import Input from '../../../../components/Input';
import SpanError from '../../../../components/SpanError';
import NumberCircle from '../../../../components/NumberCircle';
import CalendarComponent from '../../../../components/CalendarComponent';
import { TIME_SLOT } from '../../../../core/consts/timeslot';
import TimeSlot from '../TimeSlot';
import Form from '../../../../components/Form';
import { FormCreateAppointmentsStyled } from './FormCreateAppointments.styled';
/* import {
  getDoctors, getFreeTime,
  setDayVisit, setIsSelectedDoctor,
} from '../../../../store/slices/appointmentSlice'; */
import CustomLoader from '../../../../components/Loader';
import TimeSlotContainer from '../TimeSlotContainer';
import InputWrapper from '../InputWrapper';
import NumberCircleWrapper from '../NumberCircleWrapper';
import ComponentWrapper from '../ComponentWrapper';
import ComponentsInputsWrapper from '../ComponentsInputsWrapper';
import { fetchSpecializations } from '../../redux/makeAppointmentSlice';
import { useAppSelector } from '../../../../store';

export interface OnSubmitTypes {
  onSubmit: (values:{ [propName: string]: any, }) => void
}

const FormCreateAppointments: React.FC <OnSubmitTypes> = ({ onSubmit }) => {
  const dispatch = useDispatch();
  // const [doctorsSpecialization, setDoctorsSpecialization] = useState('');
  // const [isActiveTimeSlot, setIsActiveTimeSlot] = useState();
  // const [checkErrors, setCheckErrors] = useState(false);
  const {
    register, handleSubmit, control, formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchSpecializations());
  }, [dispatch]);

  const specializations = useAppSelector((state) => state.makeAppointment.specializations);
  const status = useAppSelector((state) => state.makeAppointment.status);

  console.log(specializations);
  /* const optionsOccupation = specializations.map((item) => ({
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
  }, [dispatch, doctorsSpecialization]);

  const handleDoctorsName = (e) => {
    dispatch(setIsSelectedDoctor(e));
  };

  const handleIsActive = (id) => {
    setIsActiveTimeSlot(id);
  };

  const handleDay = (day) => {
    dispatch(setDayVisit(day.toISOString()));
    dispatch(getFreeTime(dayDoctor));
  };

  useMemo(() => {
    if (dayDoctor.isSelectedDoctor === '') {
      setCheckErrors(true);
    } else {
      setCheckErrors(false);
    }
  }, [dayDoctor.isSelectedDoctor]);
*/
  return (
    <Form variant="makeAppointment" onSubmit={handleSubmit((values) => onSubmit(values))}>
      {status === 'loading' ? <CustomLoader />
        : (
          <FormCreateAppointmentsStyled>
            <ComponentWrapper>
              <NumberCircleWrapper>
                <NumberCircle>1</NumberCircle>
                <Paragraph variant="plain-1" font="regular">
                  {DICTIONARY.createAppointment.selectDoctor}
                </Paragraph>
              </NumberCircleWrapper>
              <ComponentsInputsWrapper>
                <InputWrapper>
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
                  && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.occupation}</SpanError>}
                </InputWrapper>
                <InputWrapper>
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
                  && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentPlaceholder.doctorsName}</SpanError>}
                </InputWrapper>
                <InputWrapper gap="16px" direction="column" alignItems="flex-start" position="relative">
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
                  {errors.reason
                  && <SpanError variant="auth" role="alert">{DICTIONARY.createAppointmentLabels.visitReason}</SpanError>}
                </InputWrapper>
                <InputWrapper>
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
                </InputWrapper>
              </ComponentsInputsWrapper>
            </ComponentWrapper>
            <ComponentWrapper>
              <NumberCircleWrapper>
                <NumberCircle>2</NumberCircle>
                <Paragraph variant="plain-1" font="regular">{DICTIONARY.createAppointment.selectDay}</Paragraph>
              </NumberCircleWrapper>
              <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                render={({ value, field }) => (
                  <CalendarComponent
                    value={value}
                    selected={value}
                    onChange={(e) => {
                      field.onChange(e);
                      handleDay(e);
                    }}
                  />
                )}
              />
              {errors.date
                    && <SpanError variant="date" role="alert">{DICTIONARY.createAppointment.selectDay}</SpanError>}
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
                {errors.timeSlot
                      && <SpanError variant="date" role="alert">{DICTIONARY.createAppointment.selectTime}</SpanError>}
              </TimeSlotContainer>
              <Button
                disabled={!!checkErrors}
                color="primary"
                group="main"
                data-testid="submit-button"
                type="submit"
              >
                Submit
              </Button>
            </ComponentWrapper>
          </FormCreateAppointmentsStyled>
        )}
    </Form>
  );
};

export default FormCreateAppointments;

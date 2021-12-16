import React from 'react';

export interface FormCreateAppointmentsProps {
  onSubmit: React.MouseEventHandler<HTMLButtonElement>,
  specializations: SpecializationsProps[],
  doctorName: DoctorNameProps[],
  status: string,
  dayDoctor: DayDoctorProps,
}

export interface SpecializationsProps extends FormCreateAppointmentsProps {
  specialization_name: string,
  id: string,
}

export interface DoctorNameProps extends FormCreateAppointmentsProps {
  first_name: string,
  last_name: string,
  id: string,
}

export interface DayDoctorProps extends FormCreateAppointmentsProps {
  isSelectedDoctor: string,
}

export interface HandleOccupationProps {
  children?: React.ReactNode | JSX.Element,
}

export type OnSubmit = {
  onSubmit: (values:{
    note: string,
    date: string,
  }) => void
};

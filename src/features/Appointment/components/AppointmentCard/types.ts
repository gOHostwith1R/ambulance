export interface AppointmentCardProps {
  item: ItemProps,
  doctor: DoctorProps,
  dateVisit: string,
}

export interface ItemProps extends AppointmentCardProps {
  status: string,
  reason: string,
}

export interface DoctorProps extends AppointmentCardProps {
  first_name: string,
  last_name: string,
  photo: string,
  specialization_name: string,
}
export interface PatientCardProps {
  item: ItemProps,
  patient: PatientProps,
  dateVisit: string,
  handleSetOpenModal: (elem: string) => void,
}

export interface ItemProps extends PatientCardProps {
  status: string,
  reason: string,
}

export interface PatientProps extends PatientCardProps {
  first_name: string,
  last_name: string,
  photo: string,
}

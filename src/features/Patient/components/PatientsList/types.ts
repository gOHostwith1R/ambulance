export interface PatientsListProps {
  statusForDoctor: string,
  listOfAppointments: Array<ListOfAppointmentsItems> | JSX.Element
}

interface ListOfAppointmentsItems extends PatientsListProps {
  patient: {}
}

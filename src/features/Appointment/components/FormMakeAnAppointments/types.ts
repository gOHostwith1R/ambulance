export interface FormMakeAppointmentsProps {
  onSubmit: (values: { date: string; reason: string; note: string; doctorID: string }) => void;
}

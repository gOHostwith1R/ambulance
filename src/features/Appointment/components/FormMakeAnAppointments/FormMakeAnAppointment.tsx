import React from 'react';
import { Form } from '../../../../components';

export interface OnSubmitTypes {
  onSubmit: (values:{ [propName: string]: string, }) => void
}

const FormMakeAnAppointment = ():JSX.Element => (
  <Form variant="makeAppointment" />
);

export default FormMakeAnAppointment;

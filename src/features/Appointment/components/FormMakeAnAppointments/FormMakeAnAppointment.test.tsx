import React from 'react';
import {
  fireEvent,
  render,
  screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FormMakeAnAppointment from './FormMakeAnAppointment';

const mockMakeAppointment = jest.fn();

describe('make appointment', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormMakeAnAppointment
            onSubmit={mockMakeAppointment}
            specializations={['therapist']}
            doctorName={[{
              first_name: 'Oleg',
              id: '1f35c5f0-4382-11ec-aea7-5bf2c99871db',
              last_name: 'Oleg',
            }]}
            dayDoctor={{
              isSelectedDoctor: 'Oleg Oleg',
            }}
          />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('should display error', async () => {
    fireEvent.click(screen.getByText('Submit'));

    expect(await screen.findAllByRole('alert')).toHaveLength(5);
    expect(mockMakeAppointment).not.toBeCalled();
  });
  it('should not send data', async () => {
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(mockMakeAppointment).not.toBeCalled());
  });
});

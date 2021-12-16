import React from 'react';
import {
  fireEvent,
  render, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import FormSignUp from './FormSignUp';

const mockRegister = jest.fn();

let titleNode;
let inputNodeFirstName;
let inputNodeLastName;
let inputNodeEmail;
let inputNodePassword;
let inputNodeConfirmPassword;
let buttonSubmitNode;
let errorNodesEmpty;
let errorNodes;

describe('Should render Form Sign Up', () => {
  const mockStore = configureStore();
  beforeEach(() => {
    const store = mockStore({});
    const {
      getByPlaceholderText, getByRole, queryAllByRole, findAllByRole,
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormSignUp onSubmit={mockRegister} />
        </BrowserRouter>
      </Provider>,
    );
    titleNode = getByRole('heading', { level: 1 });
    inputNodeFirstName = getByPlaceholderText(/^first name$/i);
    inputNodeLastName = getByPlaceholderText(/^last name$/i);
    inputNodeEmail = getByPlaceholderText(/^email$/i);
    inputNodePassword = getByPlaceholderText(/^password$/i);
    inputNodeConfirmPassword = getByPlaceholderText(/^confirm password$/i);
    buttonSubmitNode = getByRole('button');
    errorNodesEmpty = queryAllByRole('alert');
    errorNodes = findAllByRole('alert');
  });
  it('should be in the document', () => {
    expect(titleNode).toBeInTheDocument();
    expect(inputNodeFirstName).toBeInTheDocument();
    expect(inputNodeLastName).toBeInTheDocument();
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
    expect(inputNodeConfirmPassword).toBeInTheDocument();
    expect(buttonSubmitNode).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.click(buttonSubmitNode);

    expect(await errorNodes).toHaveLength(4);
    expect(mockRegister).not.toBeCalled();
  });

  it('should display matching error when email is invalid', async () => {
    fireEvent.input(inputNodeEmail, {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(inputNodePassword, {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(inputNodeFirstName, {
      target: {
        value: 'first name',
      },
    });

    fireEvent.input(inputNodeLastName, {
      target: {
        value: 'last name',
      },
    });

    fireEvent.submit(buttonSubmitNode);

    expect(await errorNodes).toHaveLength(1);
    expect(mockRegister).not.toBeCalled();
  });
  it('should not display error when value is valid', async () => {
    fireEvent.input(inputNodeEmail, {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(inputNodePassword, {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(inputNodeFirstName, {
      target: {
        value: 'first',
      },
    });

    fireEvent.input(inputNodeLastName, {
      target: {
        value: 'last',
      },
    });

    fireEvent.click(buttonSubmitNode);
    expect(await errorNodesEmpty).toHaveLength(0);
    await waitFor(() => expect(mockRegister).toHaveBeenCalledWith({
      firstName: 'first',
      lastName: 'last',
      password: 'password',
      confirmPassword: '',
      userName: 'test@mail.com',
    }));
  });
});

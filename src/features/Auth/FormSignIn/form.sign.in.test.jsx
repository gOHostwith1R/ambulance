import React from 'react';
import {
  fireEvent,
  render, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import FormSignIn from './form.sign.in';

const mockLogin = jest.fn();

let titleNode;
let inputNodeEmail;
let inputNodePassword;
let buttonSubmitNode;
let errorNodesEmpty;
let errorNodes;

describe('Should render Form Sign In', () => {
  const initialState = { };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    const {
      getByPlaceholderText, getByRole, queryAllByRole, findAllByRole,
    } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormSignIn onSubmit={mockLogin} />
        </BrowserRouter>
      </Provider>,
    );
    titleNode = getByRole('heading', { level: 1 });
    inputNodeEmail = getByPlaceholderText(/^email$/i);
    inputNodePassword = getByPlaceholderText(/^password$/i);
    buttonSubmitNode = getByRole('button');
    errorNodesEmpty = queryAllByRole('alert');
    errorNodes = findAllByRole('alert');
  });
  it('should be in the document', () => {
    expect(titleNode).toBeInTheDocument();
    expect(inputNodeEmail).toBeInTheDocument();
    expect(inputNodePassword).toBeInTheDocument();
    expect(buttonSubmitNode).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.click(buttonSubmitNode);

    expect(await errorNodes).toHaveLength(2);
    expect(mockLogin).not.toBeCalled();
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

    fireEvent.submit(buttonSubmitNode);

    expect(await errorNodes).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
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

    fireEvent.click(buttonSubmitNode);
    expect(await errorNodesEmpty).toHaveLength(0);
    await waitFor(() => expect(mockLogin).toHaveBeenCalledWith({
      password: 'password',
      userName: 'test@mail.com',
    }));
  });
});

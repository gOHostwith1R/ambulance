import { API_BASE } from '../../core/consts/api';
import { FetchHttpTypes } from './types';

export const fetchHttp = async ({
  url, body = null, method = 'GET', fetchWithToken = false,
}: FetchHttpTypes) => {
  try {
    if (body) {
      body = JSON.stringify(body);
    }
    let token;
    if (fetchWithToken) {
      token = JSON.parse(localStorage.getItem('userAuth') as string).access_token;
    }
    const response = await fetch(`${API_BASE}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body,
    });
    console.log(response);
    if (!response.ok) {
      return response;
    }
    return await response.json();
  } catch (e) {
    return e;
  }
};

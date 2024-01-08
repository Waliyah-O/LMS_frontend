import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { _getTokenFromStorage } from '../../utils';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_BACKEND_API_URL,
    prepareHeaders: async (headers, ) => {
      const token = _getTokenFromStorage('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
});

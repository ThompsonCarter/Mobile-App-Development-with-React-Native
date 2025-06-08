import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import PatientList from './PatientList';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve([{ id:1, name:'Ada' }]) })
);

it('loads and displays patients', async () => {
  const { getByText } = render(<PatientList />);
  await waitFor(() => expect(getByText('Ada')).toBeTruthy());
});
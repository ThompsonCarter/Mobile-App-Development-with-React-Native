import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { api } from '../api/axios';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/patients')
      .then(resp => setPatients(resp.data))
      .catch(err => console.error('Failed to fetch patients', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  return (
    <View>
      {patients.map(p => (
        <Text key={p.id}>{p.name}</Text>
      ))}
    </View>
  );
}

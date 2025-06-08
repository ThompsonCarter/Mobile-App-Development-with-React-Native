// src/screens/LogisticsDashboard.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { View, Text, ActivityIndicator } from 'react-native';

const GET_ROUTES = gql\`
  query GetRoutes {
    routes { id, name, status }
  }
\`;

export default function LogisticsDashboard() {
  const { data, loading, error } = useQuery(GET_ROUTES);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.routes.map(r => (
        <Text key={r.id}>
          {r.name} — {r.status}
        </Text>
      ))}
    </View>
  );
}

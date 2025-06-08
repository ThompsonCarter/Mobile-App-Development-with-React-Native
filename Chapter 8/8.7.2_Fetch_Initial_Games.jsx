// src/screens/ScoreTicker.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { api } from '../api/axios';
import { useLiveUpdates } from '../hooks/useLiveUpdates';

export default function ScoreTicker() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const updates = useLiveUpdates('scores');

  useEffect(() => {
    api.get('/games')
      .then(r => setGames(r.data))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const merged = [...updates, ...games];

  if (loading) return <ActivityIndicator size="large" />;
  return (
    <FlatList
      data={merged}
      keyExtractor={g => g.gameId}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
          <Text>{item.home} vs. {item.away}</Text>
          <Text>{item.score}</Text>
        </View>
      )}
    />
  );
}

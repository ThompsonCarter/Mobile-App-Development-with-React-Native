import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/movies')
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View><Text>{item.title}</Text></View>
      )}
    />
  );
}

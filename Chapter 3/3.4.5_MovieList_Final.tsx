import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

interface Movie { id: number; title: string; }

export default function MovieList(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const res = await fetch('https://api.example.com/movies');
        const json = (await res.json()) as { results: Movie[] };
        setMovies(json.results);
      } catch (e) {
        console.warn('Failed to load movies:', e);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
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

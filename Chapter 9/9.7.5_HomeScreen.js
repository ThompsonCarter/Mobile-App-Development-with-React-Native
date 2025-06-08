import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { loadEntries } from '../storage';

export default function HomeScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async () => {
      setEntries(await loadEntries());
    })();
  }, []);

  return (
    <FlatList
      data={entries}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { entry: item })}>
          <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          <Text>{new Date(item.timestamp).toLocaleString()}</Text>
          <Text>Lat: {item.location.latitude.toFixed(4)}, Lon: {item.location.longitude.toFixed(4)}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  thumbnail: { width: 100, height: 100, margin: 8 },
});
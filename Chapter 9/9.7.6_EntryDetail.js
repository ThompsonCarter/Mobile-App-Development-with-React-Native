import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function EntryDetail({ route }) {
  const { entry } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: entry.uri }} style={styles.image} />
      <Text style={styles.text}>Taken at {new Date(entry.timestamp).toLocaleString()}</Text>
      <Text style={styles.text}>
        Location: {entry.location.latitude.toFixed(4)}, {entry.location.longitude.toFixed(4)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { flex: 1, marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 8 },
});
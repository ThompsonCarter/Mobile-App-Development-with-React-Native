import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NoteDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const note = { title: `Note ${id}`, content: 'Lorem ipsum...' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function NoteListScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { id: '1', title: 'First Note' },
    { id: '2', title: 'Shopping List' },
  ]);

  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={() => navigation.navigate('Create')} />
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

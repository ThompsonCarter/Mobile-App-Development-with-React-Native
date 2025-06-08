import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function NoteCreateScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = () => {
    navigation.navigate('List');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        style={[styles.input, styles.textArea]}
        multiline
      />
      <Button title="Save" onPress={saveNote} />
    </View>
  );
}

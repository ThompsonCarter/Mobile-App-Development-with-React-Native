import React, { useEffect, useState } from 'react';
import { useTodoStore } from './useTodoStore';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default function TodoApp() {
  const { todos, add, remove, load, save } = useTodoStore();
  const [text, setText] = useState('');

  useEffect(() => { load(); }, []);
  useEffect(() => { save(); }, [todos]);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Add" onPress={() => { add({ id: Date.now(), text }); setText(''); }} />
      <FlatList
        data={todos}
        keyExtractor={t => t.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Done" onPress={() => remove(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

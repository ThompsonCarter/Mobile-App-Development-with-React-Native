import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, loadTodos, saveTodos, add, remove } from './store';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [text, setText] = React.useState('');

  useEffect(() => { dispatch(loadTodos()); }, []);
  useEffect(() => { dispatch(saveTodos()); }, [todos]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <TextInput
        placeholder="New item"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button
        title="Add"
        onPress={() => {
          dispatch(add({ id: Date.now(), text }));
          setText('');
        }}
      />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{
              flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4,
            }}>
            <Text>{item.text}</Text>
            <Button title="Done" onPress={() => dispatch(remove(item.id))} />
          </View>
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

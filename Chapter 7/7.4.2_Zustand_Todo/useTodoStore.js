import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTodoStore = create(set => ({
  todos: [],
  add: todo => set(state => ({ todos: [...state.todos, todo] })),
  remove: id => set(state => ({ todos: state.todos.filter(t => t.id !== id) })),
  load: async () => {
    const saved = await AsyncStorage.getItem('todos');
    set({ todos: saved ? JSON.parse(saved) : [] });
  },
  save: async () => {
    const state = useTodoStore.getState();
    await AsyncStorage.setItem('todos', JSON.stringify(state.todos));
  },
}));

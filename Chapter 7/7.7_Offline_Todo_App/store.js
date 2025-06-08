import { configureStore, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setAll: (_, action) => action.payload,
    add: (state, action) => { state.push(action.payload); },
    remove: (state, action) => state.filter(t => t.id !== action.payload),
  },
});

export const { setAll, add, remove } = todosSlice.actions;

export const loadTodos = () => async dispatch => {
  const data = await AsyncStorage.getItem('todos');
  dispatch(setAll(data ? JSON.parse(data) : []));
};

export const saveTodos = () => async (dispatch, getState) => {
  const state = getState().todos;
  await AsyncStorage.setItem('todos', JSON.stringify(state));
};

export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});

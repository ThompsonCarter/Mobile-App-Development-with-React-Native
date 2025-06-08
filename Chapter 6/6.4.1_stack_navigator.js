import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function NotesStack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={NoteListScreen} options={{ title: 'Your Notes' }} />
      <Stack.Screen name="Detail" component={NoteDetailScreen} options={{ title: 'Note Detail' }} />
      <Stack.Screen name="Create" component={NoteCreateScreen} options={{ title: 'New Note' }} />
    </Stack.Navigator>
  );
}

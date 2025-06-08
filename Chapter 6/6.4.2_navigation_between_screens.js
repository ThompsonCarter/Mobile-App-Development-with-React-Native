function NoteListScreen({ navigation }) {
  return (
    <Button
      title="Add Note"
      onPress={() => navigation.navigate('Create')}
    />
  );
}

// Pass data
<Button
  title="View"
  onPress={() => navigation.navigate('Detail', { id: note.id })}
/>

// Read data in NoteDetailScreen
function NoteDetailScreen({ route }) {
  const { id } = route.params;
}

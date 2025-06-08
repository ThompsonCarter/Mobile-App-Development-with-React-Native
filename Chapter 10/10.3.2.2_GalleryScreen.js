import { SharedElement } from 'react-navigation-shared-element';

function GalleryScreen({ navigation }) {
  return (
    <FlatList renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.push('Photo', { id: item.id })}>
        <SharedElement id={`photo.${item.id}`}>
          <Image source={{ uri: item.thumb }} style={styles.thumb} />
        </SharedElement>
      </TouchableOpacity>
    )} />
  );
}
function PhotoScreen({ route }) {
  const { id } = route.params;
  const photo = getPhotoById(id);
  return (
    <View style={styles.full}>
      <SharedElement id={`photo.${id}`}>
        <Image source={{ uri: photo.full }} style={styles.full} />
      </SharedElement>
    </View>
  );
}

PhotoScreen.sharedElements = route => [`photo.${route.params.id}`];
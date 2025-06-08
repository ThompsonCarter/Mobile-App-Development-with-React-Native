import React, { useState, useRef } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { saveEntries, loadEntries } from '../storage';

export default function CaptureScreen({ navigation }) {
  const camRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const snapAndSave = async () => {
    if (!camRef.current) return;
    const pic = await camRef.current.takePictureAsync();
    const { coords } = await Location.getCurrentPositionAsync();
    const entries = await loadEntries();
    const newEntry = {
      id: Date.now(),
      uri: pic.uri,
      location: coords,
      timestamp: new Date().toISOString(),
    };
    await saveEntries([newEntry, ...entries]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        <Camera ref={camRef} style={styles.camera} />
      ) : (
        <Image source={{ uri: photo.uri }} style={styles.camera} />
      )}
      <Button title="Snap & Tag" onPress={snapAndSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
});
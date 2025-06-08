import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    console.log('Photo URI:', photo.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 20, left: '40%' }}
        onPress={takePhoto}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Snap</Text>
      </TouchableOpacity>
    </View>
  );
}
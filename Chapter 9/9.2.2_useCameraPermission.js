import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';

export function useCameraPermission() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setStatus(status);
    })();
  }, []);
  return status; // 'granted' or 'denied'
}
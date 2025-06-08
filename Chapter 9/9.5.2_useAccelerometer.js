import { Accelerometer } from 'expo-sensors';
import { useState, useEffect } from 'react';

export function useAccelerometer() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    const sub = Accelerometer.addListener(accelData => setData(accelData));
    Accelerometer.setUpdateInterval(500); // ms
    return () => sub.remove();
  }, []);
  return data;
}
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export function useLocation() {
  const [loc, setLoc] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return alert('Permission denied');
      let position = await Location.getCurrentPositionAsync({});
      setLoc(position.coords); // { latitude, longitude }
    })();
  }, []);
  return loc;
}
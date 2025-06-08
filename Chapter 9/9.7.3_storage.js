import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'photoEntries';

export async function saveEntries(entries) {
  await AsyncStorage.setItem(KEY, JSON.stringify(entries));
}
export async function loadEntries() {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}
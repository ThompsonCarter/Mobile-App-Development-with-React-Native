import * as SecureStore from 'expo-secure-store';

export async function saveAuthToken(token) {
  await SecureStore.setItemAsync('authToken', token);
}
export async function getAuthToken() {
  return SecureStore.getItemAsync('authToken');
}

import * as Keychain from 'react-native-keychain';

export async function saveAuthToken(token) {
  await Keychain.setGenericPassword('auth', token);
}
export async function getAuthToken() {
  const creds = await Keychain.getGenericPassword();
  return creds ? creds.password : null;
}

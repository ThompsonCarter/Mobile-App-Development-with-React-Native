import { requestTrackingPermission } from 'react-native-tracking-transparency';

const permission = await requestTrackingPermission();
if (permission === 'authorized' || permission === 'unavailable') {
  // Proceed with tracking
}
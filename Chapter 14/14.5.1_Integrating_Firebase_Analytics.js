npm install @react-native-firebase/app @react-native-firebase/analytics
cd ios && pod install && cd ..

import analytics from '@react-native-firebase/analytics';

await analytics().logEvent('event_name', {
  param1: 'value1',
  param2: 'value2',
});
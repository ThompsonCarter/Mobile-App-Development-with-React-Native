import crashlytics from '@react-native-firebase/crashlytics';
crashlytics().log('User tapped problematic button');
crashlytics().recordError(new Error('Unexpected null'));

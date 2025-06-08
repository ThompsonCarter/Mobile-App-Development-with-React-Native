import React, { Suspense, lazy } from 'react';
const SettingsScreen = lazy(() => import('./SettingsScreen'));

export default function AppNavigator() {
  return (
    <Suspense fallback={<Loading />}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Suspense>
  );
}
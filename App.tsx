import React from 'react';

/* Navigation Things */
import { Navigation } from './src/navigators';

/* Providers */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SWRProvider } from './src/contexts';

export default function () {
  return (
    <SWRProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </SWRProvider>
  );
}

/* Types */
import type { TestRendererOptions } from 'react-test-renderer';
import type { PropsWithChildren } from 'react';

/* Testing Things */
import { render } from '@testing-library/react-native';

/* Navigation Things */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Providers */
import { NavigationContainer } from '@react-navigation/native';
import { SWRProvider } from '../../src/contexts';

type Screen = React.ComponentType<{ route: any; navigation: any }>;

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <SWRProvider dedupingInterval={0} provider={() => new Map()}>
      {children}
    </SWRProvider>
  );
};

export const renderWithProviders = (children: JSX.Element, options?: TestRendererOptions) => {
  return render(children, {
    wrapper: Providers,
    ...options,
  });
};

export const renderScreen = (screen: Screen, name: string, options?: TestRendererOptions) => {
  const Stack = createNativeStackNavigator();

  return renderWithProviders(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={name} component={screen} />
      </Stack.Navigator>
    </NavigationContainer>,
    options,
  );
};

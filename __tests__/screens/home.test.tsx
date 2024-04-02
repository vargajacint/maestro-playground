/* Testing Things */
import { waitForElementToBeRemoved } from '@testing-library/react-native';
import { ERROR_HANDLER } from '../mocks/handlers';
import { renderScreen } from '../utils';
import { server } from '../mocks/server';

/* Screens */
import HomeScreen from '../../src/screens/home';

describe('Home screen', () => {
  test('renders the screen correctly', () => {
    const { findByText } = renderScreen(HomeScreen, 'Home');

    expect(findByText('Weather')).toBeTruthy();
  });

  test('present and hide the loader', async () => {
    const { getByAccessibilityHint, getByText } = renderScreen(HomeScreen, 'Home');

    await waitForElementToBeRemoved(() => getByAccessibilityHint('loading'));

    expect(await getByText('Kyiv')).toBeTruthy();
  });

  test('present error message', async () => {
    server.use(ERROR_HANDLER);

    const { getByAccessibilityHint, getByText } = renderScreen(HomeScreen, 'Home');

    await waitForElementToBeRemoved(() => getByAccessibilityHint('loading'));

    expect(await getByText('Something went wrong, please try again later!')).toBeTruthy();
  });
});

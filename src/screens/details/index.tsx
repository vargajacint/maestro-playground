import React, { useCallback } from 'react';

/* Types */
import type { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigators/types';
import type { RouteProp } from '@react-navigation/native';

/* Data Things */
import { useWeatherDetails } from '../../hooks';

/* Presentation Things */
import { FlatList, View } from 'react-native';
import { Header } from './header';
import { Empty } from './empty';
import { Row } from './row';

/* Styles */
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

type Data = { title: string; value: string };

function DetailsScreen(props: Props) {
  /* Hooks */
  const { weather, error, isLoading } = useWeatherDetails(props.route.params.lat, props.route.params.lon);

  const data: Data[] | null = weather
    ? [
        { title: 'Country', value: `${weather.country}` },
        { title: 'Humidity', value: `${weather.humidity}%` },
        { title: 'Pressure', value: `${weather.pressure} hPa` },
        { title: 'Max teperature', value: `${weather.temperature.max} °C` },
        { title: 'Min teperature', value: `${weather.temperature.min} °C` },
        { title: 'Feels like', value: `${weather.temperature.feels} °C` },
        { title: 'Wind speed', value: `${weather.wind.speed} km/h` },
        { title: 'Wind degree', value: `${weather.wind.deg}` },
      ]
    : null;

  const renderHeader = useCallback(() => {
    if (weather) {
      return <Header temperature={weather.temperature.current} icon={weather.icon} />;
    }

    return null;
  }, [weather]);

  const renderEmpty = useCallback(() => <Empty loading={isLoading} error={error} />, [error, isLoading]);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={data}
      renderItem={renderRow}
      ListEmptyComponent={renderEmpty}
      ListHeaderComponent={renderHeader}
      ItemSeparatorComponent={renderSeparator}
    />
  );
}

const renderSeparator = () => <View style={styles.separator} />;

const renderRow = ({ item }: { item: Data }) => <Row title={item.title} value={item.value} />;

export default DetailsScreen;

DetailsScreen.options = (props: { route: RouteProp<RootStackParamList, 'Details'> }): NativeStackNavigationOptions => {
  return {
    title: props.route.params.name,
    headerLargeTitle: true,
    headerTransparent: true,
    headerBlurEffect: 'prominent',
  };
};

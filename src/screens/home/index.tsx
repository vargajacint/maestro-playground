import React, { useCallback } from 'react';

/* Types */
import type { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigators/types';
import type { IWeatherListItem } from '../../typings';

/* Data Things */
import { useWeatherList } from '../../hooks';

/* Presentation Things */
import { FlatList, View } from 'react-native';
import { Empty } from './empty';
import { Row } from './row';

/* Styles */
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen(props: Props) {
  /* Hooks */
  const { list, error, isLoading } = useWeatherList();

  const renderEmpty = useCallback(() => <Empty loading={isLoading} error={error} />, [error, isLoading]);

  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      data={list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={styles.container}
    />
  );
}
const renderSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }: { item: IWeatherListItem }) => <Row weather={item} />;

const keyExtractor = (item: IWeatherListItem) => String(item.id);

export default HomeScreen;

HomeScreen.options = (): NativeStackNavigationOptions => {
  return {
    title: 'Weather',
    headerLargeTitle: true,
    headerTransparent: true,
    headerBlurEffect: 'prominent',
  };
};

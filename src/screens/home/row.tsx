import React from 'react';

/* Types */
import type { RootStackParamList } from '../../navigators/types';
import type { IWeatherListItem } from '../../typings';
import type { NavigationProp } from '@react-navigation/native';

/* Data Things */
import { useNavigation } from '@react-navigation/native';

/* Presentation Things */
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../components';

/* Constants */
import { ICON, SPACING } from '../../constants';

type Props = {
  weather: IWeatherListItem;
};

export const Row = ({ weather }: Props) => {
  /* Hooks */
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToDetailsScreen = () => navigate('Details', { ...weather.coord, name: weather.name });

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetailsScreen} testID="weather-row-button">
      <Image source={{ uri: weather.icon }} height={ICON.L} width={ICON.L} />
      <View>
        <Text numberOfLines={1}>{weather.name}</Text>
        <Text size="S" color="secondary" numberOfLines={1}>
          {weather.description}
        </Text>
      </View>

      <Text type="bold" color="white" align="right" style={styles.temperature}>
        {weather.temperature} °C
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.M,
    columnGap: SPACING.S,
  },
  temperature: {
    flex: 1,
  },
});

import React from 'react';

/* Presentation Things */
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../../components';
import { SPACING } from '../../constants';

type Props = {
  temperature: number;
  icon: string;
};

export const Header = ({ temperature, icon }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: icon }} height={200} width={200} />
      <Text size="XL" type="bold" color="white">
        {temperature} °C
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: SPACING.M,
  },
});

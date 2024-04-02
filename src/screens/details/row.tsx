import React from 'react';

/* Presentation Things */
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components';

/* Constants */
import { SPACING } from '../../constants';

type Props = {
  title: string;
  value: string;
};

export const Row = ({ title, value }: Props) => {
  return (
    <View style={styles.container}>
      <Text type="bold">{title}</Text>
      <Text color="secondary">{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.M,
  },
});

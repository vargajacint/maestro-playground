import React from 'react';

/* Types */
import type { IAPIRejection } from '../../typings';

/* Presentation Things */
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Text } from '../../components';

type Props = {
  loading: boolean;
  error?: IAPIRejection;
};

export const Empty = ({ loading, error }: Props) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text color="red" size="L">
          {error?.message ?? ''}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

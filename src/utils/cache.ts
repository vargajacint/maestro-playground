/* Types */
import type { MMKV } from 'react-native-mmkv';
import type { Cache } from 'swr';

export const cacheProvider = (storage: MMKV, cache: Readonly<Cache>): Cache => {
  return {
    keys() {
      return cache.keys();
    },
    get: key => {
      const valueFromMap = cache.get(key);

      if (valueFromMap) {
        return valueFromMap;
      }

      if (typeof key === 'string' && storage.contains(key)) {
        const value = storage.getString(key);
        return value ? JSON.parse(value) : undefined;
      }

      return undefined;
    },
    set: (key, value) => {
      cache.set(key, value);

      if (typeof key === 'string') {
        storage.set(key, JSON.stringify(value));
      }
    },
    delete: key => {
      cache.delete(key);

      if (typeof key === 'string' && storage.contains(key)) {
        storage.delete(key);
      }
    },
  };
};

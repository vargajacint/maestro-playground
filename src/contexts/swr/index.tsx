import React, { PropsWithChildren, useMemo } from 'react';

/* Types */
import type { Cache } from 'swr';

/* Data Things */
import * as swr__internal from 'swr/_internal';
import { cacheProvider, api } from '../../utils';
import { SWRConfig } from 'swr';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

type Props = Partial<swr__internal.PublicConfiguration> & {
  provider?: () => Map<any, any>;
};

export const SWRProvider = ({ children, ...props }: PropsWithChildren<Props>) => {
  const config = useMemo(() => {
    return {
      provider: (cache: Readonly<Cache>) => cacheProvider(storage, cache),
      fetcher: (url: string) => api({ method: 'GET', path: url }),
      ...props,
    };
  }, [props]);

  return <SWRConfig value={config}>{children}</SWRConfig>;
};

/* Types */
import type { Theme } from '@react-navigation/native';

/* Data Things */
import { Dimensions, PixelRatio } from 'react-native';

export const CITIES = [
  {
    city: 'Kyiv',
    id: 703448,
  },
  {
    city: 'Sumy',
    id: 692194,
  },
  {
    city: 'Warsaw',
    id: 756135,
  },
  {
    city: 'Wrocław',
    id: 3081368,
  },
  {
    city: 'České Budějovice',
    id: 3077916,
  },
  {
    city: 'Berlin',
    id: 2950159,
  },
  {
    city: 'Munich',
    id: 2867714,
  },
  {
    city: 'Aachen',
    id: 3247449,
  },
  {
    city: 'Washington',
    id: 5815135,
  },
  {
    city: 'New York City',
    id: 5128581,
  },
];

const { width } = Dimensions.get('screen');

const wp = (widthPercent: number) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const ICON = {
  S: wp(4),
  M: wp(6),
  L: wp(8),
  XL: wp(10),
} as const;

export const COLOR = {
  primary: '#A8C8B4',
  secondary: '#66636D',
  tertiary: '#E1EFE1',
  white: '#FFFFFF',
  black: '#000000',
  red: '#FD5647',
} as const;

export const SPACING = {
  XS: wp(1.5),
  S: wp(2),
  M: wp(3.5),
  L: wp(5),
  XL: wp(8),
} as const;

export const FONT = {
  XS: wp(2.5),
  S: wp(3.5),
  M: wp(4),
  L: wp(5),
  XL: wp(7),
} as const;

export const THEME: Theme = {
  colors: {
    background: COLOR.primary,
    border: COLOR.tertiary,
    card: COLOR.white,
    notification: COLOR.red,
    primary: COLOR.black,
    text: COLOR.black,
  },
  dark: false,
};

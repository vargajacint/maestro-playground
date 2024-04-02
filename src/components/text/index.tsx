import React from 'react';

/* Types */
import type { TextProps as RNTextProps, TextStyle } from 'react-native';

/* Presentation Things */
import { StyleSheet, Text as RNText } from 'react-native';

/* Constants */
import { COLOR, FONT } from '../../constants';

type TextAlign = TextStyle['textAlign'];

type TextColors = keyof typeof COLOR;

type TextTypes = 'normal' | 'bold';

type TextSize = keyof typeof FONT;

export type TextProps = RNTextProps & {
  color?: TextColors;
  align?: TextAlign;
  type?: TextTypes;
  size?: TextSize;
};

export const Text = ({ color = 'black', type = 'normal', size = 'M', align = 'left', ...props }: TextProps) => {
  return (
    <RNText {...props} style={[sizes[size], types[type], colors[color], { textAlign: align }, props.style]}>
      {props.children}
    </RNText>
  );
};

const types = StyleSheet.create<Record<TextTypes, TextStyle>>({
  normal: {},
  bold: {
    fontWeight: 'bold',
  },
});

const colors = StyleSheet.create<Record<TextColors, TextStyle>>(
  Object.keys(COLOR).reduce(
    (acc, curr) => ({ ...acc, [curr]: { color: COLOR[curr as keyof typeof COLOR] } }),
    {} as Record<TextColors, TextStyle>,
  ),
);

const sizes = StyleSheet.create<Record<TextSize, TextStyle>>(
  Object.keys(FONT).reduce(
    (acc, curr) => ({ ...acc, [curr]: { fontSize: FONT[curr as keyof typeof FONT] } }),
    {} as Record<TextSize, TextStyle>,
  ),
);

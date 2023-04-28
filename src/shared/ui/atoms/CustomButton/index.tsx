import React, {ReactElement} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {useStyles} from './styles';
import {useTheme} from '../../../theme/useTheme';

interface ButtonProps {
  text?: string;
  onPress?: () => void;
  children?: ReactElement;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  children,
  buttonStyle,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyle || styles.button(theme.BG.sixthly)}>
      {text ? (
        <Text style={styles.text(theme.text.primary)}>{text}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

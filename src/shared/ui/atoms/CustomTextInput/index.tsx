import React, {ReactElement} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {useStyles} from './styles';

interface CustomInputProps {
  title?: string;
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  rightContent?: ReactElement | ReactElement[];
  leftContent?: ReactElement | ReactElement[];
  errorText?: string;
  value: string;
  onChange: (value: string) => void;
}

export const CustomTextInput: React.FC<CustomInputProps> = ({
  title,
  inputStyle,
  textInputStyle,
  rightContent,
  leftContent,
  errorText,
  value,
  onChange,
}) => {
  const styles = useStyles();

  return (
    <View style={inputStyle}>
      <View style={styles.inputContainer}>
        <View>{leftContent}</View>
        <TextInput
          value={value}
          onChangeText={text => onChange(text)}
          style={styles.input}
          placeholder={'Type a note...'}
        />
        <View>{rightContent}</View>
      </View>
      {errorText && <Text>{errorText}</Text>}
    </View>
  );
};

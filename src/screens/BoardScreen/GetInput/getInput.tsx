import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useStyles} from './styles';
import {CustomButton} from '../../../../src/shared/ui/atoms/CustomButton';
import {CustomTextInput} from '../../../../src/shared/ui/atoms/CustomTextInput';
import {useTheme} from '../../../../src/shared/theme/useTheme';

interface GetInputProps {
  onAdd: (inputValue: string) => void;
}

export const GetInput: React.FC<GetInputProps> = ({onAdd}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const [inputValue, setInputValue] = useState('');

  const onAddMemoized = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <View style={styles.inputContainer}>
      <CustomTextInput
        value={inputValue}
        onChange={setInputValue}
        inputStyle={styles.input}
      />
      <CustomButton
        buttonStyle={styles.button(theme.BG.sixthly)}
        text="Save"
        onPress={onAddMemoized}
      />
    </View>
  );
};

import React, {useState} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {useStyles} from './styles';
import {CustomTextInput} from '../../../shared/ui/atoms/CustomTextInput';
import {Icon} from '../../../shared/ui/atoms/Icon';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {BoardStackParams} from '@shared/types/navigation/BoardStack';
import {useTheme} from '../../../../src/shared/theme/useTheme';

interface MemorandumSectionProps {
  title: string;
  onRemove: () => void;
  onEdited: (value: string) => void;
  onPress: () => void;
}

export const MemorandumSection: React.FC<MemorandumSectionProps> = ({
  title,
  onRemove,
  onEdited,
  onPress,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();

  const {navigate} = useNavigation<StackNavigationProp<BoardStackParams>>();

  const [isEditMode, setEditMode] = useState(false);

  const removeAlert = () =>
    Alert.alert('Do you want to delete a note?', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => onRemove()},
    ]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.textChanges}
        onPress={() => {
          onPress(), navigate('MemorandumScreen');
        }}>
        {isEditMode ? (
          <CustomTextInput value={title} onChange={onEdited} />
        ) : (
          <Text style={styles.text(theme.text.secondary)}>{title}</Text>
        )}
      </Pressable>
      {isEditMode ? (
        <Pressable
          onPress={() => {
            setEditMode(false);
          }}
          style={styles.button}>
          <Icon name={'check'}></Icon>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setEditMode(!isEditMode);
          }}
          style={styles.button}>
          <Icon name={'edit'}></Icon>
        </Pressable>
      )}

      <Pressable onPress={removeAlert} style={styles.button}>
        <Icon name={'trash'}></Icon>
      </Pressable>
    </View>
  );
};

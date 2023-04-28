import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {useStyles} from './styles';
import {useTheme} from '../../../../src/shared/theme/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {MemorandumStateType} from '../../../shared/types/Memorandumslice/MemorandumSlice';
import {
  editMemorandum,
  removeMemorandum,
} from '../../../entities/MemorandumStorage/lib/memorandumSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BoardStackParams} from '@shared/types/navigation/BoardStack';
import {RootState} from '@entities/MemorandumStorage/lib/MemorandumStorage';

export const RedactorSection: React.FC = () => {
  const styles = useStyles();
  const {theme} = useTheme();

  const memorandums = useSelector<RootState, MemorandumStateType>(
    state => state.toolkit.selectedMemorandum,
  );
  const dispatch = useDispatch();

  const [titleMemo, setTitleMemo] = useState(memorandums.title);
  const [bodyMemo, setBodyMemo] = useState(memorandums.body);
  const {goBack} = useNavigation<StackNavigationProp<BoardStackParams>>();

  const removeAlert = () =>
    Alert.alert('Do you want to delete a note?', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(removeMemorandum(memorandums.GUID));
          goBack();
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <TextInput
          style={styles.textHeader(theme.text.secondary)}
          onChangeText={setTitleMemo}
          value={titleMemo}
        />

        <TextInput
          style={styles.textBody(theme.text.secondary)}
          multiline
          onChangeText={setBodyMemo}
          value={bodyMemo}
        />

        <View style={styles.options}>
          <Button
            title="Save"
            onPress={() => {
              dispatch(
                editMemorandum({
                  GUID: memorandums.GUID,
                  title: titleMemo,
                  body: bodyMemo,
                }),
              );
            }}
          />
          <Button title="Delete" onPress={() => removeAlert()} />
        </View>
      </View>
    </View>
  );
};

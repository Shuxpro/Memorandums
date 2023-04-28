import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useStyles} from './styles';
import {GetInput} from './GetInput/getInput';
import {MemorandumSection} from './MemorandumSection/MemorandumSection';
import {useTheme} from '../../../src/shared/theme/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {
  addMemorandum,
  editMemorandum,
  removeMemorandum,
  setMemorandum,
} from '../../entities/MemorandumStorage/lib/memorandumSlice';
import {MemorandumStateType} from '@shared/types/Memorandumslice/MemorandumSlice';
import {RootState} from '@entities/MemorandumStorage/lib/MemorandumStorage';

export const BoardScreen: React.FC = () => {
  const styles = useStyles();
  const {theme} = useTheme();

  const memorandums = useSelector<RootState, MemorandumStateType[]>(
    state => state.toolkit.memorandums,
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.header}>
          <Text style={styles.text(theme.text.secondary)}>Notes</Text>
        </View>

        <GetInput
          onAdd={title => {
            if (!title) {
              return;
            }

            dispatch(addMemorandum(title));
          }}
        />

        <View style={styles.header}>
          {memorandums.length <= 0 && (
            <Text style={styles.textWarning(theme.text.secondary)}>
              There is no one memorandum.
            </Text>
          )}
          {memorandums.map(memorandum => (
            <MemorandumSection
              onPress={() => dispatch(setMemorandum(memorandum))}
              key={memorandum.GUID}
              title={memorandum.title}
              onRemove={() => dispatch(removeMemorandum(memorandum.GUID))}
              onEdited={(value: string) => {
                dispatch(editMemorandum({GUID: memorandum.GUID, title: value}));
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useStyles} from './styles';
import {RedactorSection} from './RedactorSection/RedactorSection';
import {useTheme} from '../../../src/shared/theme/useTheme';

export const MemorandumScreen: React.FC = () => {
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text(theme.text.secondary)}>Memorandum</Text>
        </View>
        <View style={styles.main}>
          <RedactorSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

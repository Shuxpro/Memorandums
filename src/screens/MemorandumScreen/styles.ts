import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  text: {
    fontSize: 24,
    lineHeight: 24,
    color: 'black',
  },

  header: {
    alignItems: 'center',
    margin: 10,
  },

  main: {width: '100%'},
});

export const useStyles = () => {
  return {
    ...styles,
    text: (color: string) => ({
      ...styles.text,
      color,
    }),
  };
};

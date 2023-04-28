import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },

  textChanges: {
    height: '100%',
    width: '80%',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  input: {height: '100%', width: '80%'},
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

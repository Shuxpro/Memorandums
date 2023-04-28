import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 3,
  },

  input: {height: '100%', width: '80%'},

  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '17%',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    button: (backgroundColor: string) => ({
      ...styles.button,
      backgroundColor,
    }),
  };
};

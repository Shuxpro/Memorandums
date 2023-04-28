import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  containerScroll: {
    flex: 1,
    minHeight: '100%',
    padding: 16,
    gap: 5,
  },

  text: {
    fontSize: 24,
    lineHeight: 24,
  },

  textWarning: {
    fontSize: 16,
    lineHeight: 24,
  },

  header: {
    alignItems: 'center',
  },

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
    text: (color: string) => ({
      ...styles.text,
      color,
    }),
    textWarning: (color: string) => ({
      ...styles.textWarning,
      color,
    }),
    button: (backgroundColor: string) => ({
      ...styles.button,
      backgroundColor,
    }),
  };
};

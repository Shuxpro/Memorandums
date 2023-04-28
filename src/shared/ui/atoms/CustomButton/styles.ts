import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 24,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
});

export const useStyles = () => ({
  ...styles,
  text: (color: string) => ({
    ...styles.text,
    color,
  }),
  button: (backgroundColor: string) => ({
    ...styles.button,
    backgroundColor,
  }),
});

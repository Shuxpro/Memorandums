import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  textBody: {
    fontSize: 16,
    lineHeight: 24,
  },

  options: {
    margin: 5,
    gap: 10,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    textHeader: (color: string) => ({
      ...styles.textHeader,
      color,
    }),
    textBody: (color: string) => ({
      ...styles.textBody,
      color,
    }),
  };
};

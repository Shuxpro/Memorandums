import React, {useCallback, useState} from 'react';

export enum ThemesList {
  primary = 'primary',
  dark = 'dark',
}

interface ThemeContextType {
  theme: ThemesList;
  changeTheme: (newValue: ThemesList) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: ThemesList.primary,
  changeTheme: () => {},
});

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState(ThemesList.primary);

  const handleChangeTheme = useCallback((newValue: ThemesList) => {
    setTheme(newValue);
  }, []);

  return (
    <ThemeContext.Provider
      children={children}
      value={{theme, changeTheme: handleChangeTheme}}
    />
  );
};

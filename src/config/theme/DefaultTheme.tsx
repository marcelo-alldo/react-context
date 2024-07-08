import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0b9bc7',
    secondary: '#0ed0c0'
  }
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

const DefaultTheme: React.FC<DefaultThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultTheme;

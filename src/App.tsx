import React from 'react';

import RoutesApp from './routes/RoutesApp';
import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyle from './config/GlobalStyle';
import DataProvider from './contexts/DataContext';
import CompanyProvider from './contexts/CompanyContext';
import UserProvider from './contexts/UserContext';

const App: React.FC = () => {
  return (
    <DefaultTheme>
      <DataProvider>
        <CompanyProvider>
          <UserProvider>
            <RoutesApp />
            <GlobalStyle />
          </UserProvider>
        </CompanyProvider>
      </DataProvider>
    </DefaultTheme>
  );
};

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from 'react';
import produtos from '../data/produtos';

interface DataType {
  products: any[];
  contact: any;
  home: { title: string; conteudo: string };
}

interface DataProviderProps {
  children: React.ReactNode;
}

interface DataContextType {
  data: DataType | null;
  setData: (value: DataType) => void;
}

const DataContext = createContext<DataContextType | null>(null);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    setData({
      contact: '51 9874-7642',
      products: produtos,
      home: { title: 'Minha Home', conteudo: 'Aqui vai o conteudo da home' }
    });
  }, []);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;

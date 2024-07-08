import React, { createContext, useState } from 'react';

interface CompanyType {
  name: string;
  cnpj: string;
  address: string;
  about: string;
}

interface CompanyProviderProps {
  children: React.ReactNode;
}

interface CompanyContextType {
  company: CompanyType | undefined;
  setCompany: (data: CompanyType) => void;
}

const CompanyContext = createContext<CompanyContextType | null>(null);

const CompanyProvider: React.FC<CompanyProviderProps> = ({ children }) => {
  const [company, setCompany] = useState<CompanyType>();

  return <CompanyContext.Provider value={{ company, setCompany }}>{children}</CompanyContext.Provider>;
};

export { CompanyContext };
export type { CompanyType };
export default CompanyProvider;

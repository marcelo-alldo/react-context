import { createContext, useState } from 'react';

interface UserType {
  login: string;
  token: string;
}

interface UserContextType {
  user: UserType | undefined;
  setUser: (user: UserType) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | undefined>();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext };
export default UserProvider;

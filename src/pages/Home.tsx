import React, { useContext, useEffect } from 'react';
import Paragrafo from '../components/Paragrafo';
import { CompanyContext } from '../contexts/CompanyContext';
import { UserContext } from '../contexts/UserContext';

const Home: React.FC = () => {
  const companyContext = useContext(CompanyContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    console.log('alterou o context');
    console.log(userContext);
  }, [userContext]);

  function login() {
    console.log('Logou');
    userContext?.setUser({ login: '@marcelo', token: 'kjgkjhkjhkjhkjhkj' });
  }

  return (
    <>
      <h1>{companyContext?.company?.name}</h1>
      <h2>{companyContext?.company?.cnpj}</h2>
      <h2>{companyContext?.company?.address}</h2>
      <Paragrafo dark={false} titulo="Sobre nós">
        {userContext?.user?.login}
      </Paragrafo>

      <button onClick={login}>Logar</button>
    </>
  );
};

export default Home;

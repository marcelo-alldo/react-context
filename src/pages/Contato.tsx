import React, { useContext } from 'react';
import Paragrafo from '../components/Paragrafo';
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext';
import { CompanyContext } from '../contexts/CompanyContext';

const Contato: React.FC = () => {
  const dataContext = useContext(DataContext);
  const companyContext = useContext(CompanyContext);

  return (
    <>
      <h1>Contato</h1>
      <h3>{companyContext?.company?.name}</h3>
      <Paragrafo dark={false} titulo="Como entrar em contato">
        Meu número de contato é: {dataContext?.data?.contact}
        <p>
          <Link to="/">Home</Link>
        </p>
      </Paragrafo>
    </>
  );
};

export default Contato;

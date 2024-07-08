import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../contexts/DataContext';
import SerachInput from '../components/SearchInput';
import { UserContext } from '../contexts/UserContext';

const Produtos: React.FC = () => {
  const dataContext = useContext(DataContext);
  const userContext = useContext(UserContext);

  const [dataLocal, setDataLocal] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (dataContext?.data?.products) {
      setDataLocal(dataContext?.data?.products);
    }
  }, [dataContext]);

  useEffect(() => {
    if (search.length) {
      if (search.length > 2) {
        //1 FORMA DE MUDAR STATE
        // const newData = [...dataLocal];
        // const newDataFiltered = newData.filter(item => item.name.includes(search));
        // setDataLocal(newDataFiltered);

        //2 FORMA MAIS CORRETA
        setDataLocal(prev => {
          const filtered = prev.filter(item => item.name.includes(search));
          return [...filtered];
        });
      }
    } else {
      if (dataContext?.data?.products) {
        setDataLocal(dataContext?.data?.products);
      }
    }
  }, [search]);

  return (
    <>
      <h1>Produtos - {userContext?.user?.login}</h1>
      <SerachInput actionChange={setSearch} />
      {dataLocal.length ? (
        dataLocal.map(item => {
          return (
            <p key={item.id}>
              {item.id} - {item.name}
            </p>
          );
        })
      ) : (
        <h3>Nenhum produto encontrado.</h3>
      )}
    </>
  );
};

export default Produtos;

import React from 'react';
import ParagrafoStyled from './ParagrafoStyled';

interface ParagrafoProps {
  titulo: string;
  conteudo?: string;
  children?: React.ReactNode;
  dark: boolean;
}

const Paragrafo: React.FC<ParagrafoProps> = ({ titulo, conteudo, children, dark }) => {
  return (
    <ParagrafoStyled dark={dark}>
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
      {children}
    </ParagrafoStyled>
  );
};

export default Paragrafo;

import React from 'react';
import Navbar from '../../components/Navbar';
import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar title="React Start" />
      <Wrapper>{children}</Wrapper>
      <Footer>
        <small>Desenvolvido no Programa Starter da Growdev</small>
      </Footer>
    </>
  );
};

export default DefaultLayout;

import React from 'react';
import FooterStyled from './FooterStyled';

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import NavBarStyled from './NavBarStyled';
import navigation from '../../config/navigation';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <NavBarStyled>
      <div style={{ marginRight: '20px' }}>
        <h1>{title}</h1>
      </div>

      {navigation.map(item => {
        return (
          <p key={item.key}>
            <Link to={item.url}>{item.label}</Link>
          </p>
        );
      })}
    </NavBarStyled>
  );
};

export default Navbar;

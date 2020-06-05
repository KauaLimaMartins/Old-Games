import React from 'react';

import logo from '../../assets/logo.png';
import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <img src={logo} />
    </Container>
  );
};

export default Header;

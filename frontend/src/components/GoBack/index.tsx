import React from 'react';

import { Container, Text, Icon } from './styles';

const GoBack: React.FC = () => {
  return (
    <Container to="/">
      <Icon />
      <Text>Voltar para home</Text>
    </Container>
  );
};

export default GoBack;

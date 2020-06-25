import React from 'react';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, Text, MessageContainer } from './styles';

const SuccessMessage: React.FC = () => {
    return (
        <Container>
            <MessageContainer>
                <FiCheckCircle color="#AC38FF" size={46} />
                <Text>Game Cadastrado!</Text>
            </MessageContainer>

            <Link href="/">
                <h1>Voltar para home</h1>
            </Link>
        </Container>
    );
};

export default SuccessMessage;

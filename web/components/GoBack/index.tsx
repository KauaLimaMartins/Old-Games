import React from 'react';
import Link from 'next/link';

import { Container, Text, Icon } from './styles';

const GoBack: React.FC = () => {
    return (
        <Link href="/">
            <Container>
                <Icon />
                <Text>Sair da conta</Text>
            </Container>
        </Link>
    );
};

export default GoBack;

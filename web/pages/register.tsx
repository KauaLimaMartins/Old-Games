import React, { useState, FormEvent, ChangeEvent } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { NextSeo } from 'next-seo';
import Router from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import GlobalStyles from '../styles/global';

import SEO from '../next-seo.config';

import {
    Container,
    CenterContainer,
    CenterLeftContainer,
    CenterRightContainer,
    Input,
    Button,
    Title,
    Description,
    ButtonLeft,
    DescriptionLeft,
    TitleLeft,
} from '../styles/register';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        password: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent): Promise<void> {
        event.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.SERVER}/users`,
                formData
            );

            alert('DEU CERTO 🤩');

            Router.push('/login');
        } catch (err) {
            alert('Erro');
        }
    }

    return (
        <>
            <NextSeo {...SEO} />
            <GlobalStyles />
            <Container>
                <CenterContainer>
                    <CenterLeftContainer>
                        <TitleLeft>
                            Olá, meu
                            <br /> confederado!
                        </TitleLeft>
                        <DescriptionLeft>
                            Já tem uma conta?
                            <br />
                            Faça login!
                        </DescriptionLeft>

                        <Link href="/login">
                            <ButtonLeft>Login</ButtonLeft>
                        </Link>
                    </CenterLeftContainer>

                    <CenterRightContainer onSubmit={handleSubmit}>
                        <Link href="/">
                            <GrFormClose size={24} />
                        </Link>
                        <Title>Crie sua conta</Title>
                        <Description>
                            Cadastre-se para trocar
                            <br /> jogos com pessoas proximas a você!
                        </Description>

                        <Input
                            name="name"
                            type="text"
                            placeholder="Nome"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="whatsapp"
                            type="text"
                            placeholder="Whatsapp"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            onChange={handleInputChange}
                        />
                        <Button type="submit">Entrar</Button>
                    </CenterRightContainer>
                </CenterContainer>
            </Container>
        </>
    );
};

export default Register;

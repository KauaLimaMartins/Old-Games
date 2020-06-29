import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { IoMdArrowBack } from 'react-icons/io';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import GlobalStyles from '../styles/global';
import Dropzone from '../components/Dropzone';

import {
    Container,
    CenterContainer,
    Header,
    Input,
    Select,
    Button,
    GridConsoles,
    FieldTitle,
} from '../styles/create-game';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface Props {
    ufs: string[];
    consoles: Item[];
}

interface IBGEUFResponse {
    id: number;
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const CreateGame: React.FC<Props> = ({ ufs, consoles }) => {
    const [location, setLocation] = useState<[number, number]>([0, 0]);
    const [cities, setCities] = useState<string[]>([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedConsole, setSelectedConsole] = useState(0);

    const [formData, setFormData] = useState({
        game_name: '',
        game_description: '',
    });

    const [selectedFile, setSelectedFile] = useState<File>();

    useEffect(() => {
        if (selectedUf === '0') {
            return;
        }
        axios
            .get<IBGECityResponse[]>(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
            )
            .then((response) => {
                const cityNames = response.data.map((city) => city.nome);
                setCities(cityNames);
            });
    }, [selectedUf]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            setLocation([latitude, longitude]);
        });
    }, []);

    useEffect(() => {});

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    function handleSelectConsole(id: number) {
        setSelectedConsole(id);
    }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();

        const [latitude, longitude] = location;

        const data = {
            game_name: formData.game_name,
            game_description: formData.game_description,
            latitude,
            longitude,
            image: selectedFile,
            uf: selectedUf,
            city: selectedCity,
        };

        console.log(data);
    }

    return (
        <>
            <DefaultSeo {...SEO} />
            <GlobalStyles />

            <Container>
                <Header>
                    <Link href="/dashboard">
                        <div>
                            <IoMdArrowBack size={22} />
                            <p>Voltar</p>
                        </div>
                    </Link>
                </Header>

                <CenterContainer onSubmit={handleSubmit}>
                    <FieldTitle>Imagem</FieldTitle>
                    <Dropzone onFileUploaded={setSelectedFile} />

                    <FieldTitle>Informações</FieldTitle>
                    <Input
                        name="game_name"
                        placeholder="Nome do jogo"
                        onChange={handleInputChange}
                    />
                    <Input
                        name="game_description"
                        placeholder="Descrição do jogo"
                        onChange={handleInputChange}
                    />
                    <div id="lat-lon">
                        <Input
                            name="latitude"
                            className="lat"
                            placeholder="Latitude"
                            value={
                                location[0] === 0 || location[1] === 0
                                    ? ''
                                    : location[0]
                            }
                            onChange={handleInputChange}
                        />
                        <Input
                            name="longitude"
                            className="lon"
                            placeholder="Longitude"
                            value={
                                location[0] === 0 || location[1] === 0
                                    ? ''
                                    : location[1]
                            }
                            onChange={handleInputChange}
                        />
                    </div>
                    <div id="selects">
                        <Select
                            name="uf"
                            className="uf"
                            value={selectedUf}
                            onChange={handleSelectUf}
                        >
                            <option value="0">Selecione uma UF</option>
                            {ufs.map((uf) => (
                                <option key={uf} value={uf}>
                                    {uf}
                                </option>
                            ))}
                        </Select>
                        <Select
                            name="city"
                            className="city"
                            value={selectedCity}
                            onChange={handleSelectCity}
                        >
                            <option value="0">Selecione uma Cidade</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </Select>
                    </div>

                    <FieldTitle>Console</FieldTitle>
                    <GridConsoles>
                        {consoles.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectConsole(item.id)}
                                className={
                                    selectedConsole === item.id
                                        ? 'selected'
                                        : ''
                                }
                            >
                                <img src={item.image_url} />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </GridConsoles>
                    <Button type="submit">Finalizar</Button>
                </CenterContainer>
            </Container>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async (_) => {
    const ufs = await axios
        .get<IBGEUFResponse[]>(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        )
        .then((response) => {
            const ufInitials = response.data.map((uf) => uf.sigla);

            return ufInitials;
        });

    const consoles = await axios
        .get<Item[]>(`${process.env.SERVER}/consoles`)
        .then((response) => {
            return response.data;
        });

    return {
        props: {
            ufs,
            consoles,
        },
    };
};

export default CreateGame;

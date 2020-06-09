import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import api from '../../services/api';

import Header from '../../components/Header';
import GoBack from '../../components/GoBack';
import SuccessMessage from '../../components/SuccessMessage';

import {
    Container,
    TopContainer,
    CenterContainer,
    FieldsetContainer,
    FieldsetInput,
    FieldsetLabel,
    DescriptionInput,
    SelectInput,
    GridConsoles,
    SubmitButton,
} from './styles';

const NewGame: React.FC = () => {
    const history = useHistory();

    // States
    const [finished, setFinished] = useState(false);

    const [consoles, setConsoles] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([
        0,
        0,
    ]);

    const [selectedConsole, setSelectedConsole] = useState(0);
    const [selectedUf, setSelectedUf] = useState<string>('0');
    const [selectedCity, setSelectedCity] = useState<string>('0');
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
        0,
        0,
    ]);

    const [formData, setFormData] = useState({
        owner: '',
        email: '',
        whatsapp: '',
        game_name: '',
        game_description: '',
    });

    // Effects
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            setInitialPosition([latitude, longitude]);
        });
    }, []);

    useEffect(() => {
        api.get('/consoles').then((response) => {
            setConsoles(response.data);
        });
    }, []);

    useEffect(() => {
        axios
            .get<IBGEUFResponse[]>(
                'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
            )
            .then((response) => {
                const ufInitials = response.data.map((uf) => uf.sigla);

                setUfs(ufInitials);
            });
    }, []);

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

    // Functions
    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    function handleMapClick(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setSelectedPosition([lat, lng]);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    function handleSelectConsole(id: number) {
        setSelectedConsole(id);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const {
            owner,
            email,
            whatsapp,
            game_name,
            game_description,
        } = formData;
        const [latitude, longitude] = selectedPosition;
        const city = selectedCity;
        const uf = selectedUf;
        const console_id = selectedConsole;

        const data = {
            image: 'fake image',
            owner,
            email,
            whatsapp,
            game_name,
            game_description,
            latitude,
            longitude,
            city,
            uf,
            console_id,
        };

        try {
            api.post('games', data);

            setFinished(true);
        } catch (err) {
            alert('Erro, tente novamente');
        }
    }

    return <SuccessMessage />;

    // return finished ? (
    //     <SuccessMessage />
    // ) : (
    //     <Container>
    //         <TopContainer>
    //             <Header />
    //             <GoBack />
    //         </TopContainer>
    //         <CenterContainer onSubmit={handleSubmit}>
    //             <h1 id="principal-title">Cadastro do jogo</h1>

    //             <FieldsetContainer>
    //                 <legend>
    //                     <h2>Dados Pessoais</h2>
    //                 </legend>

    //                 <div className="field">
    //                     <FieldsetLabel htmlFor="owner">
    //                         Nome do(a) doador(a)
    //                     </FieldsetLabel>
    //                     <FieldsetInput
    //                         type="text"
    //                         name="owner"
    //                         onChange={handleInputChange}
    //                     />
    //                 </div>

    //                 <div className="container">
    //                     <div className="field" id="email">
    //                         <FieldsetLabel htmlFor="email">Email</FieldsetLabel>
    //                         <FieldsetInput
    //                             type="text"
    //                             name="email"
    //                             onChange={handleInputChange}
    //                         />
    //                     </div>
    //                     <div className="field" id="whatsapp">
    //                         <FieldsetLabel htmlFor="whatsapp">
    //                             Whatsapp
    //                         </FieldsetLabel>
    //                         <FieldsetInput
    //                             type="text"
    //                             name="whatsapp"
    //                             onChange={handleInputChange}
    //                         />
    //                     </div>
    //                 </div>
    //             </FieldsetContainer>

    //             <FieldsetContainer>
    //                 <legend>
    //                     <h2>Dados do jogo</h2>
    //                 </legend>

    //                 <div className="field">
    //                     <FieldsetLabel htmlFor="game_name">
    //                         Nome do jogo
    //                     </FieldsetLabel>
    //                     <FieldsetInput
    //                         type="text"
    //                         name="game_name"
    //                         onChange={handleInputChange}
    //                     />
    //                 </div>

    //                 <div className="field">
    //                     <FieldsetLabel htmlFor="game_description">
    //                         Descrição
    //                     </FieldsetLabel>
    //                     <DescriptionInput
    //                         name="game_description"
    //                         onChange={handleInputChange}
    //                     />
    //                 </div>
    //             </FieldsetContainer>

    //             <FieldsetContainer>
    //                 <legend>
    //                     <h2>Endereço</h2>
    //                     <span>Selecione o endereço no mapa</span>
    //                 </legend>

    //                 <Map
    //                     center={initialPosition}
    //                     zoom={15}
    //                     className="map"
    //                     onClick={handleMapClick}
    //                 >
    //                     <TileLayer
    //                         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                     />
    //                     <Marker position={selectedPosition} />
    //                 </Map>

    //                 <div className="container">
    //                     <div className="field" id="uf">
    //                         <FieldsetLabel htmlFor="uf">
    //                             Estado (UF)
    //                         </FieldsetLabel>
    //                         <SelectInput
    //                             onChange={handleSelectUf}
    //                             value={selectedUf}
    //                             name="uf"
    //                             id="uf"
    //                         >
    //                             <option value="0">Selecione uma UF</option>
    //                             {ufs.map((uf: string) => (
    //                                 <option key={uf} value={uf}>
    //                                     {uf}
    //                                 </option>
    //                             ))}
    //                         </SelectInput>
    //                     </div>
    //                     <div className="field" id="city">
    //                         <FieldsetLabel htmlFor="city">Cidade</FieldsetLabel>
    //                         <SelectInput
    //                             onChange={handleSelectCity}
    //                             name="city"
    //                             id="city"
    //                         >
    //                             <option value="0">Selecione sua cidade</option>
    //                             {cities.map((city: string) => (
    //                                 <option key={city} value={city}>
    //                                     {city}
    //                                 </option>
    //                             ))}
    //                         </SelectInput>
    //                     </div>
    //                 </div>
    //             </FieldsetContainer>

    //             <FieldsetContainer>
    //                 <legend>
    //                     <h2>Console</h2>
    //                     <span>Selecione de qual console é o seu jogo</span>
    //                 </legend>

    //                 <GridConsoles>
    //                     {consoles.map((item) => (
    //                         <li
    //                             key={item.id}
    //                             onClick={() => handleSelectConsole(item.id)}
    //                             className={
    //                                 selectedConsole === item.id
    //                                     ? 'selected'
    //                                     : ''
    //                             }
    //                         >
    //                             <img src={item.image_url} alt={item.title} />
    //                             <span>{item.title}</span>
    //                         </li>
    //                     ))}
    //                 </GridConsoles>
    //             </FieldsetContainer>

    //             <SubmitButton>Cadastrar jogo</SubmitButton>
    //         </CenterContainer>
    //     </Container>
    // );
};

export default NewGame;

import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    SafeAreaView,
    Alert,
} from 'react-native';

import api from '../../services/api';
import styles from './styles';

const Games: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as GameParams;

    // States
    const [consoles, setConsoles] = useState<Consoles[]>([]);
    const [selectedConsole, setSelectedConsole] = useState(0);

    const [games, setGames] = useState<Games[]>([]);

    const [initialPosition, setInitialPosition] = useState<[number, number]>([
        0,
        0,
    ]);

    // Effects
    useEffect(() => {
        api.get('/consoles').then((response) => setConsoles(response.data));
    }, []);

    useEffect(() => {
        // Load the user's current position
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert(
                    'Erro',
                    'Precisamos de sua permisão para obter a localização!'
                );

                // A second chance for the user to allow localization
                const { status } = await Location.requestPermissionsAsync();

                if (status !== 'granted') {
                    return;
                }
            }

            const location = await Location.getCurrentPositionAsync();

            const { latitude, longitude } = location.coords;

            setInitialPosition([latitude, longitude]);
        }

        loadPosition();
    }, []);

    useEffect(() => {
        api.get('games', {
            params: {
                city: routeParams.city,
                uf: routeParams.uf,
                consoleId: selectedConsole,
            },
        }).then((response) => {
            setGames(response.data);
        });
    }, [selectedConsole]);

    // Functions
    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateToDetail(game_id: number) {
        navigation.navigate('Details', { game_id });
    }

    function handleSelectConsole(consoleId: number) {
        setSelectedConsole(consoleId);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#AC38FF" />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo.</Text>
                <Text style={styles.description}>
                    Encontre no mapa um game em doação.
                </Text>

                <View style={styles.mapContainer}>
                    {initialPosition[0] !== 0 && (
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: initialPosition[0],
                                longitude: initialPosition[1],
                                latitudeDelta: 0.014,
                                longitudeDelta: 0.014,
                            }}
                        >
                            {games.map((game) => (
                                <Marker
                                    key={String(game.id)}
                                    style={styles.mapMarker}
                                    onPress={() =>
                                        handleNavigateToDetail(game.id)
                                    }
                                    coordinate={{
                                        latitude: game.latitude,
                                        longitude: game.longitude,
                                    }}
                                >
                                    <View style={styles.mapMarkerContainer}>
                                        <Image
                                            style={styles.mapMarkerImage}
                                            source={{
                                                uri:
                                                    'http://lojasaraiva.vteximg.com.br/arquivos/ids/655497/1005800289.jpg?v=636968164320630000',
                                            }}
                                        />
                                        <Text style={styles.mapMarkerTitle}>
                                            {game.game_name}
                                        </Text>
                                    </View>
                                </Marker>
                            ))}
                        </MapView>
                    )}
                </View>
            </View>
            <View style={styles.itemsContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    {consoles.map((item) => (
                        <TouchableOpacity
                            key={String(item.id)}
                            style={[
                                styles.item,
                                selectedConsole === item.id
                                    ? styles.selectedConsole
                                    : {},
                            ]}
                            onPress={() => handleSelectConsole(item.id)}
                            activeOpacity={0.6}
                        >
                            <SvgUri
                                width={46}
                                height={46}
                                uri={item.image_url}
                            />
                            <Text style={styles.consoleTitle}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Games;

interface Consoles {
    id: number;
    image_url: string;
    title: string;
}

interface Games {
    id: number;
    game_name: string;
    image: string;
    latitude: number;
    longitude: number;
}

interface DetailParams {
    game_id: number;
}

interface GameParams {
    uf: string;
    city: string;
}

interface Data {
    game: {
        image: string;
        owner: string;
        email: string;
        whatsapp: string;
        game_name: string;
        game_description: string;
        city: string;
        uf: string;
    };

    consoleTitle: {
        title: string;
    }[];
}

interface IBGEUFResponse {
    id: number;
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

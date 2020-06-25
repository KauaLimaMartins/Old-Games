import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`;

export const Header = styled.header`
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 15px;

    svg#settings {
        cursor: pointer;
        color: #ac38ff;

        animation: settings 4s infinite;

        @keyframes settings {
            0% {
                color: #ac38ff;
            }

            50% {
                color: #a330d0;
            }

            100% {
                color: #ac38ff;
            }
        }
    }

    @media (max-width: 759px) {
        padding: 20px;
    }
`;

export const ButtonAddGame = styled.button`
    background: #ac38ff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 40px;
    width: 150px;
    height: 40px;
    margin-bottom: 12px;

    transition: 0.4s;
    animation: backgroundcolor 2s infinite;

    &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    p {
        color: #fff;
        font-size: 14px;
    }

    @keyframes backgroundcolor {
        0% {
            background: #ac38ff;
        }

        50% {
            background: #a330d0;
        }

        100% {
            background: #ac38ff;
        }
    }
`;

export const ListGamesContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 30px;

    width: 70%;
`;

export const GameContainer = styled.div`
    width: 260px;
    height: 260px;
    background: #fff;
    border-radius: 10px;
    justify-self: center;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    }
`;

export const GameImage = styled.img`
    width: 260px;
    height: 170px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: #091234;
`;

export const GameTitle = styled.h1`
    color: #322153;
    font-family: Helvetica, sans-serif;
    padding-left: 8px;
    font-size: 22px;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const GameConsole = styled.h3`
    color: #ac38ff;
    font-family: Helvetica, sans-serif;
    padding-left: 8px;
    margin-bottom: 8px;
    font-size: 14px;
`;

export const GameDescription = styled.p`
    color: #b6b6b6;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 8px;
    padding-right: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

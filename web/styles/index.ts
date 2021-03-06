import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;

    height: 100vh;

    align-items: center;
    justify-content: space-around;

    @media (max-width: 1050px) {
        flex-direction: column-reverse;
        height: 100%;

        div#left,
        div#right {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            text-align: center;

            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 660px) {
        div#right {
            display: none;
        }

        height: 90vh;
        background: url('/background.png') no-repeat center;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    font-family: 'Ubuntu', Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3.5rem;

    color: #322153;

    margin: 40px 0;

    span#highlight {
        color: #ac38ff;
    }

    @media (max-width: 435px) {
        font-size: 2.5rem;
        margin: 0 0 20px;
    }
`;

export const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

    font-family: Ubuntu, Helvetica, sans-serif;
    font-size: 1.7rem;
    color: #6c6c80;

    @media (max-width: 435px) {
        font-size: 1.2rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 320px;
    height: 60px;

    margin-top: 100px;
    margin-bottom: 10px;

    @media (max-width: 1050px) {
        margin: 60px 0;
    }

    @media (max-width: 660px) {
        margin: 60px 0 10px;
    }

    @media (max-width: 375px) {
        width: 280px;
        height: 50px;

        p {
            font-size: 1rem;
        }
    }

    &:hover {
        cursor: pointer;

        div#left-button {
            background: #ac38ff;
        }

        div#right-button {
            background: #a220ff;
        }
    }
    &:active {
        cursor: pointer;

        div#left-button {
            background: #ac38ff;
        }

        div#right-button {
            background: #a220ff;
        }
    }
`;

export const LeftSideButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a220ff;
    width: 20%;
    transition: 0.4s;

    border-radius: 8px 0 0 8px;
`;

export const RightSideButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ac38ff;
    width: 80%;
    transition: 0.4s;

    border-radius: 0 8px 8px 0;
`;

export const TextButton = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    color: #fff;
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 1.2rem;
    text-decoration: underline #ac38ff;
`;

export const RegisterText = styled.a`
    color: #333;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 5px;

    span {
        color: #444;
        text-decoration: underline;
        transition: 0.2s;
        cursor: pointer;
    }

    span:hover {
        color: #ac38ff;
        text-decoration: underline;
    }
    span:active {
        color: #ac38ff;
        text-decoration: underline;
    }
`;

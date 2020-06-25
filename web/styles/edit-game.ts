import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    align-items: center;
    justify-content: center;
`;

export const CenterContainer = styled.div`
    display: flex;
    width: 75vw;
    height: 75vh;
    background: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    animation: shows 1s linear alternate;

    @keyframes shows {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    transition: all 0.6s ease-in-out;

    @media (max-width: 1024px) {
        width: 90vw;
        height: 90vh;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
`;

export const CenterLeftContainer = styled.form`
    width: 60%;
    height: 100%;
    display: flex;
    background: url('/background2.png') #fff no-repeat center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
        margin-left: 4px;
        position: absolute;
        align-self: flex-start;
        justify-self: flex-start;
        top: 13%;
        cursor: pointer;

        @media (max-width: 870px) {
            top: 4%;
        }

        @media (max-width: 768px) {
            top: 1%;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 60%;
    }

    @media (max-height: 640px) {
        height: 100%;
    }
`;

export const CenterRightContainer = styled.div`
    width: 40%;
    height: 100%;
    background: #ac38ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: collors 4s infinite;

    @keyframes collors {
        0% {
            background-color: #ac38ff;
        }
        50% {
            background-color: #a919c9;
        }
        100% {
            background-color: #ac38ff;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 40%;
    }
`;

export const Image = styled.img`
    width: auto;
    max-width: 70%;
    height: auto;
    border-radius: 10px;
    max-height: 60%;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    height: 100%;
    width: 60%;
    font-size: 1.2rem;
    color: #444;
    border-radius: 4px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    border: 1px #dedede solid;
    height: 45px;
    margin: 10px 0 0;

    &:focus {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const CancelEdition = styled.p`
    font-size: 14px;
    color: #dedede;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 5px;

    a {
        color: #dedede;
        text-decoration: underline;
        transition: 0.4s;
        cursor: pointer;

        &:hover {
            color: #fff;
        }
        &:active {
            color: #fff;
        }
    }
`;

export const TitleRight = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    margin-bottom: 10px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const DescriptionRight = styled.p`
    color: #fefefe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 25px;

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

export const ButtonRight = styled.button`
    background: transparent;
    border: 2px solid #fff;
    border-radius: 70px;
    width: 140px;
    height: 40px;
    font-size: 1.3rem;
    color: #fff;

    transition: 0.4s;

    @keyframes texts {
        0% {
            color: #ac38ff;
        }
        50% {
            color: #a919c9;
        }
        100% {
            color: #ac38ff;
        }
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }

    &:hover {
        border: none;
        color: #ac38ff;
        background: #fff;
    }
    &:active {
        border: none;
        color: #ac38ff;
        background: #fff;
    }
`;

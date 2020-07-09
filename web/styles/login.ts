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
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);

    animation: shows 0.8s linear alternate;

    @keyframes shows {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    transition: all 0.6s ease-in-out;

    @media (max-width: 870px) {
        width: 95vw;
        height: 95vh;
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
    background: url('/background.png') #fff no-repeat center;
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

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
    color: #333;
    font-family: Helvetica, sans-serif;
    font-size: 42px;

    @media (max-width: 425px) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    color: #555;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 18px;

    @media (max-width: 425px) {
        font-size: 1.1rem;
    }
`;

export const Input = styled.input`
    height: 100%;
    font-size: 1.2rem;
    color: #444;
    border-radius: 4px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    border: 1px #dedede solid;
    width: 60%;
    animation: input-show 0.8s linear;
    height: 45px;
    margin: 10px 0 0;

    &:focus {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 80%;
        animation: input-responsive-show 0.8s linear;

        @keyframes input-responsive-show {
            from {
                width: 0%;
            }

            to {
                width: 80%;
            }
        }
    }

    @keyframes input-show {
        from {
            width: 0%;
        }

        to {
            width: 60%;
        }
    }
`;

export const Button = styled.button`
    width: 180px;
    height: 50px;
    margin-top: 15px;
    border: none;
    background: #ac38ff;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 25px;

    transition: 0.2s;

    &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
    &:active {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    animation: collors 4s infinite;
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

export const TitleRight = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    margin-bottom: 10px;

    @media (max-width: 425px) {
        font-size: 30px;
        margin-bottom: 5px;
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
        margin-bottom: 15px;
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

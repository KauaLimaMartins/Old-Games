import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 250px;
    margin: 30px 0 10px;

    animation: bgcolor 4s infinite;
    background: #d191ff;

    @keyframes bgcolor {
        0% {
            background: #d191ff;
        }

        50% {
            background: #cb82f0;
        }

        100% {
            background: #d191ff;
        }
    }

    p {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        margin-top: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContainerLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    background: transparent;
    border: 2px dotted #fff;
`;

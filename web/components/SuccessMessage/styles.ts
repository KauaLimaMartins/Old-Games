import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    h1 {
        font-size: 1.5rem;
        color: #fff;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        transition: 0.4s;
    }

    h1:hover {
        font-weight: bold;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

export const Text = styled.strong`
    margin-top: 8px;
    color: #fff;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;

    margin-bottom: 40px;
`;

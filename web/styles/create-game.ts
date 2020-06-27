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
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    cursor: pointer;

    div {
        display: flex;
        align-items: center;
    }

    svg {
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

    p {
        color: #ac38ff;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 3px;
        font-size: 1.2rem;

        animation: settings 4s infinite;
    }

    @media (max-width: 759px) {
        padding: 20px;
    }
`;

export const CenterContainer = styled.form`
    width: 60%;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0 40px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);

    div#lat-lon {
        display: flex;

        input.lat {
            margin-right: 10px;
        }
    }

    div#selects {
        display: flex;

        select.uf {
            margin-right: 10px;
        }
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
    height: 45px;
    margin: 10px 0 0;

    transition: 0.2s;

    &:focus {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Select = styled.select`
    height: 100%;
    font-size: 1.2rem;
    color: #444;
    border-radius: 4px;
    background-color: #eee;
    border: none;
    padding: 12px 12px;
    border: 1px #dedede solid;
    width: 60%;
    height: 45px;
    margin: 10px 0 0;

    transition: 0.2s;

    &:focus {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Button = styled.button`
    width: 160px;
    height: 45px;
    margin-top: 25px;
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
`;

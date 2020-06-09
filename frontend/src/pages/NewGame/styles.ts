import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const TopContainer = styled.div`
    display: flex;
    width: 90vw;
    height: 10vw;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const CenterContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 60%;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 30px;

    h1#principal-title {
        color: #322153;
        font-family: Helvetica;
    }
`;

export const FieldsetContainer = styled.fieldset`
    border: none;
    margin-top: 30px;

    h2 {
        color: #322153;
        font-family: Helvetica;
    }

    span {
        font-family: Arial, Helvetica, sans-serif;
        color: #6c6c80;
        font-size: 1rem;
    }

    legend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
    }

    div.field {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    div.container {
        display: flex;
        align-items: center;
        justify-content: center;

        div#email {
            width: 60%;
        }

        div#whatsapp {
            width: 40%;
            margin-left: 10px;
        }

        div#uf {
            width: 35%;
            margin-right: 10px;
        }

        div#city {
            width: 65%;
        }
    }

    .map {
        width: 100%;
        height: 350px;
        border-radius: 8px;
        margin-bottom: 24px;
    }
`;

export const FieldsetLabel = styled.label`
    font-size: 1rem;
    color: #6c6c80;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0 8px 2px;
`;

export const FieldsetInput = styled.input`
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
`;

export const DescriptionInput = styled.input`
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    height: 100px;
`;

export const SelectInput = styled.select`
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    margin: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
`;

export const GridConsoles = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;

    li {
        background: #f5f5f5;
        border: 2px solid #f5f5f5;
        height: 180px;
        border-radius: 8px;
        padding: 32px 24px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;

        img {
            width: 70px;
            height: 70px;
        }

        span {
            flex: 1;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;

            font-size: 1.2rem;
            display: flex;
            align-items: center;
            color: #322153;
        }
    }

    li.selected {
        background: rgba(183, 83, 255, 0.2);
        border: 2px solid #ac38ff;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    display: flex;
    width: 260px;
    height: 56px;
    background: #ac38ff;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    transition: background-color 0.4s;
    cursor: pointer;

    &:hover {
        background: #a110ff;
    }
`;

import styled from 'styled-components';
import { BsBoxArrowInLeft } from 'react-icons/bs';

export const Container = styled.div`
    display: Flex;

    width: auto;
    height: auto;

    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;

        p {
            color: #ac38ff;
        }

        svg {
            color: #222;
        }
    }
`;

export const Icon = styled(BsBoxArrowInLeft).attrs({
    size: 24,
})`
    color: #ac38ff;
    transition: color 0.4s;
`;

export const Text = styled.p`
    color: #222;
    margin-left: 6px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    transition: color 0.4s;
    text-decoration: underline #f0f0f5;

    &:hover {
        cursor: pointer;
    }
`;

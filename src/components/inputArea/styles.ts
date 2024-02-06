import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: #6AA842;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    opacity: 1;
    transition: opacity 0.5s ease;

    &:hover {
        background-color: #5F479F;
        color: white;
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    flex-direction: column; /* Alteração para coluna em telas menores */
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row; /* Volta para linha em telas maiores */
        align-items: center;
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 10px; /* Adiciona espaçamento inferior em telas menores */
    
    @media (min-width: 768px) {
        margin-bottom: 0; /* Remove espaçamento inferior em telas maiores */
    }
`;

export const MonthArrow = styled.div`
    width: 40px; 
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    
    @media (max-width: 768px) {
        flex-direction: column; /* Muda para coluna em telas menores */
    }
`;

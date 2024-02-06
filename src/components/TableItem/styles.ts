import styled from "styled-components";

export const TableLine = styled.tr`
`;

export const TableColumn = styled.td`
    padding: 10px 5px;
    font-size: 14px;
    border-bottom: 2px solid #FBF8E7;

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 8px 5px;
    }

    @media (max-width: 450px) {
        font-size: 10px;
        padding: 6px 3px;
    }
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 8px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
    font-size: 14px;
    width: 70%;

    @media (max-width: 768px) {
        display: block;
        text-align: center;
        font-size: 12px;
    
    }

    @media (max-width: 450px) {
        font-size: 10px;
        margin-bottom: 5px;
    }
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-size: 14px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 12px;
    }

    @media (max-width: 450px) {
        font-size: 10px;
    }
`;

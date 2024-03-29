import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
    @media (min-width: 768px) {
        margin-bottom: 0;
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
        flex-direction: column;
    }
`;

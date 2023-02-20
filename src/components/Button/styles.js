import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUD_800};


    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    font-weight: 500;

    border-radius: 10px;

    &:disabled{
        opacity: 0.5;
    }
`
import { styled } from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    width: 100%;
    border: 0;
    height: 30px;

    &::placeholder{
        color: #FFF;
        font-family: Open Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`


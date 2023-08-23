import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    font-family: 'Open Sans';
    font-size: 1rem;
    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    @media (max-width: 425px) {
        min-width: inherit;
        font-size: .8rem;
    }

    @media (max-width: 360px) {
        min-width: inherit;
        font-size: .8rem;
    }



    &:hover {
        opacity: .7;
        cursor: pointer;
    }


    ${({variant}) => variant !== "primary" && css `
        min-width: 167px;
        height: 33px;
        opacity: 0.8;
        
        background: #E4105D;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
        
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
    
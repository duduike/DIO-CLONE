import { css, styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1110px) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 50px;
    }

`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    
    color: #FFF;

    @media (max-width: 485px) {
        width: 100%;
    }
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #FFF;

    @media (max-width: 485px) {
        font-size: 25px;
        width: 16.25rem;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 360px) {
        width: 100%;
        gap: 2rem;
    }

`

export const Banner = styled.img`
    width: 100%;

`
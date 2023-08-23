import { css, styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1110px) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 40px;
    }
`

export const Column = styled.div`
    flex: 1;
    max-width: 20rem;
`

export const Wrapper = styled.div`
    margin: 2.19rem 0 1.69rem 0;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    width: 24.25rem;
    margin-bottom: 20px;
    line-height: 44px;

    ${({variant}) => variant !== "primary" && css `
        color: #E4105D;
    `}

    @media (max-width: 485px) {
        font-size: 25px;
        width: 16.25rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LoginButtonWrapper = styled.div`
    display: flex;
    gap: .5rem;
`

export const LoginButton = styled.p`
    margin-top: 0.69rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF;    

    ${({variant}) => variant !== "primary" && css `
        margin-top: 0.69rem;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        color: #23DD7A;
        }
    `}
`


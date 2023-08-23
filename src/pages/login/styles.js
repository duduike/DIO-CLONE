import { css, styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7.37rem;

    @media (max-width: 1110px) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 50px;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex:
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;

    margin-bottom: 20px;
    line-height: 44px;
    
    color: #FFF;

    @media (max-width: 485px) {
        font-size: 25px;
        width: 16.25rem;
    }
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #E4105D;

    @media (max-width: 485px) {
        font-size: 25px;
        width: 16.25rem;
    }
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

    @media (max-width: 485px) {
        font-size: 25px;
        width: 16.25rem;
    }
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;
    ;
`


import { Header } from "../../components/Header"
import { Title } from "../cadastro/styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import {   
    Container,
    Column,
    Subtitle,
    Wrapper,
    LoginButton,
    LoginButtonWrapper 
} from "./styles"

export const Cadastro = () => {
  return (<>
    <Header/>
    <Container>
        <Column>
            <Title variant='primary'>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
            <Title variant='secondary'>Começe agora grátis</Title>
            <Subtitle>Crie sua conta e make the change._</Subtitle>
            <Wrapper>                
                <form>
                    <Input placeholder="Nome completo"></Input>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Password"></Input>

                    <Button title='Criar minha conta' variant='secondary'/>

                </form>
            </Wrapper>
            <Subtitle>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Subtitle>
            <LoginButtonWrapper>
                    <LoginButton variant="primary">Já tenho conta. </LoginButton>
                <Link to='/login'>
                    <LoginButton variant="secondary">Fazer login</LoginButton>
                </Link>
            </LoginButtonWrapper>
        </Column>
    </Container> 
  </>)
}


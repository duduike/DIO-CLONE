import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom';

import {
    Container,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper
    
} from './styles';


export const Login = () => {
    return (<>
        <Header />
        <Container>
            <Column>            
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>            
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder='E-mail'/>
                        <Input placeholder='Password' type='password'/>
                        <Button title="Entrar" variant='secondary'/>
                    </form>
                    <Row>
                        <CriarText>Esqueci minha senha</CriarText>
                        <Link to='/cadastro'>
                            <EsqueciText>Criar conta</EsqueciText>
                        </Link>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

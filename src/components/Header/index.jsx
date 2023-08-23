import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button';
import { Link } from 'react-router-dom';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to='/'>                
                    <img src={logo} alt='Logo da dio' />    
                </Link>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='/'>Home</MenuRight>
                <Link to='/login'>
                    <Button title="Entrar"/>
                </Link>
                <Link to='/cadastro'>
                    <Button title="Cadastrar"/>
                </Link>
            </Row>    
        </Container>
    </Wrapper>
  )
}

export { Header }

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png'
import {
    Container,
    Title,
    TitleHighlight,
    TextContent,
    Column,
    Banner
} from '../home/styles';


export const Home = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    <TitleHighlight>Implemente <br /></TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Link to='/cadastro'>
                    <Button variant='secondary' title='Começar agora' />
                </Link>
            </Column>
            <div>
                <Banner src={banner} alt='Homem olhando tablet com informações de pessoas da área da tecnologia'/>
            </div>
        </Container>
    </>)
}


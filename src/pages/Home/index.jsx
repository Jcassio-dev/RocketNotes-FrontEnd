import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section'
import { Note } from '../../components/Notes'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="Frontend"/></li>
                <li><ButtonText title="Node"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo Título" />
            </Search>
        
            <Content>
                <Section title='Minhas notas'> 
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id: 1, name: 'react'},
                            {id: 2, name: 'react'}
                        ]
                        }}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>

    );
}
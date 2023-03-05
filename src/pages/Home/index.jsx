import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section'
import { Note } from '../../components/Notes'
import { api } from '../../services/api';


export function Home() {
    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState([])

    function handleTagSelected(tagName){
        const alredySelected = tagSelected.includes(tagName)

        if(alredySelected){
            const filteredSelected = tagSelected.filter(tag => tag !== tagName)
            setTagSelected(filteredSelected)
        }else{
            setTagSelected(prevState => [...prevState, tagName])
        }
        
    }

    useEffect(() => {
        async function fetchTags(){
           const response = await api.get("/tags")
            setTags(response.data);
        }

        fetchTags();
    }, []);
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos" 
                    onClick={() => handleTagSelected("all")}
                    isActive={tagSelected.length === 0}
                    />
                </li>

                {
                    tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText 
                        title={tag.name}
                        onClick={()=>handleTagSelected(tag.name)}
                        isActive={tagSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                }
                
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
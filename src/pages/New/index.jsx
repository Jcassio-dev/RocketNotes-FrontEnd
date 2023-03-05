import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea} from '../../components/Textarea' 
import { NoteItem } from '../../components/NoteItem' 
import { Section } from '../../components/Section' 
import { Button } from '../../components/Button' 

import { Container, Form } from "./styles";


export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState=> [...prevState, newTag]);
        setNewTag("");
    }
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        if(!title){
            return alert("Insira um texto para o título da nota");
        }
        if(newLink){
            return alert("O campo de Link está preenchido, mas não foi adicionado. Aperte o botão para adicionar o link ou deixe o campo vázio.")
        }
        if(newTag){
            return alert("O campo de Tag está preenchido, mas não foi adicionado. Aperte o botão para adicionar a tag ou deixe o campo vázio.")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada!");
        navigate("/")
    }

    return(
        <Container>
            <Header/>

            <main>
               <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title='Links Úteis'>

                        {
                        links.map((link, index)=>(
                            <NoteItem 
                            key={String(index)}
                            value={link}
                            onClick={() => handleRemoveLink(link)}
                            />
                        ))
                        }

                        <NoteItem 
                        placeholder="Novo link" 
                        isNew
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                        {
                            tags.map((tag, index)=>(
                                <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={()=>handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <NoteItem 
                        placeholder="Nova Tag" 
                        isNew
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTag}
                        />

                        </div>
                    </Section>

                    <Button title='Salvar' onClick={handleNewNote}/>
                </Form> 
            </main>
        </Container>    
    )
}
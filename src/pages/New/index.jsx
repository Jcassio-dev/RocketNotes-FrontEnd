import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea} from '../../components/Textarea' 
import { NoteItem } from '../../components/NoteItem' 
import { Section } from '../../components/Section' 
import { Button } from '../../components/Button' 

import { Container, Form } from "./styles";


export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
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
                    />

                    <Textarea
                        placeholder="Observações"
                    />

                    <Section title='Links Úteis'>

                        {
                        links.map((link, index)=>(
                            <NoteItem 
                            key={String(index)}
                            value={link}
                            onClick={() => { }}
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
                        <NoteItem value= "React"/>
                        <NoteItem placeholder="Nova Tag" isNew/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form> 
            </main>
        </Container>    
    )
}
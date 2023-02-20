import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header () {
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/Jcassio-dev.png" 
                alt="Foto do usuário"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>José Cássio</strong>
                </div>
            </Profile>

            <Logout>
              <RiShutDownLine/>  
            </Logout>
        </Container>

    )
}
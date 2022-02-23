import { Link } from 'react-router-dom'
import Container from '../Container/Container'


import logo from '../../../img/costs_logo.png'

export default function Navbar() {
    return (
        <nav>
            <Container>
                <ul>
                    <li>
                        <Link to='/'><img src={logo} alt="Costs" /></Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/company'>Contato</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Empresa</Link>
                    </li>
                    <li>
                        <Link to='/newproject'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
    

    
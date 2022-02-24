import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import logo from '../../../img/costs_logo.png'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>

                <Link to='/'><img src={logo} alt="Costs" /></Link>

                <ul class={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Empresa</Link>
                    </li>
                    
                </ul>
            </Container>
        </nav>
    )
}
    

    
import { Link } from 'react-router-dom'
// import styles from './NavBar.module.css'

function NavBar(){
  return(
    <>
    <ul>
        <li><Link to='/'>Página Inicial</Link></li>
        <li><Link to='/newproject'>Novo Projeto</Link></li>
        <li><Link to='/company'>Empresa</Link></li>
        <li><Link to='/contact'>Contato</Link></li>
      </ul>
    </>
  )
}

export default NavBar
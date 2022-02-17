import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
  return(
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <FaFacebook/>
        </li>
        <li>
          <FaInstagram/>
        </li>
        <li>
          <FaLinkedin/>
        </li>
        <li>
          <FaGithub/>
        </li>
      </ul>
      <p>
        <span>Desenvolvido por Rita Ferreira</span>
      </p>
    </footer>
  )
}

export default Footer
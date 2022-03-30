import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
  return(
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <a 
            href='https://web.facebook.com/profile.php?id=100009064566176' target='_blank'
          >
            <FaFacebook/>
          </a>
        </li>
        <li>
          <a 
            href='https://www.instagram.com/_leopis/' 
            target='_blank'
          >
            <FaInstagram/>
          </a>
        </li>
        <li>
          <a 
            href='https://www.linkedin.com/in/rita-ferr/' 
            target='_blank'
          >
            <FaLinkedin/>
          </a>
        </li>
        <li>
          <a 
            href='https://github.com/RitaFer' 
            target='_blank'
          >
            <FaGithub/>
          </a>
        </li>
      </ul>
      <p>
        <span>
          Desenvolvido por Rita Ferreira
        </span>
      </p>
    </footer>
  )
}

export default Footer
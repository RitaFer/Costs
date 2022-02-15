import styles from './Frase.module.css'

function Frase() {
  return(
    <div className = {styles.fraseContainer}>
      <p className = {styles.fraseContent}>Tudo isso aqui é um teste, taokey?</p>
    </div>
  )
}

export default Frase
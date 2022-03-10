import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../views/Contact.module.css'

function Contact(){

  return (
    <div className={styles.contact_container}>
      <h1>Contate-nos</h1>
      <form>
      <Input 
        type="text"
        text="Nome "
        name='name'
        placeholder='Insira seu nome completo'
      />
      <Input 
        type="email"
        text="E-mail"
        name='cost'
        placeholder='Insira seu e-mail'
      />
      <Input 
        type="text"
        text="Mensagem"
        name='description'
        placeholder='Insira sua mensagem'
      />
      <SubmitButton text='Enviar' />
    </form>
    </div>
    
  )
}

export default Contact
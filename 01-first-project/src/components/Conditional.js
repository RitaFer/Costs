import { useState } from 'react'

function Conditional () {

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()
  
  function sendEmail(e){
    e.preventDefault()
    setUserEmail(email)
  }

  function clearEmail(){
    setUserEmail('')
  }

  return (
    <>
      <p>---------------------------------------------------------------------------------------------------------------</p>
      <h3>Cadastre seu e-mail:</h3>
      <form>
        <input 
          tye="email" 
          placeholder="Digite o seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit' onClick={sendEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <>
            <p>O e-mail do usuário é: {userEmail} </p>
            <button onClick={clearEmail}>
              Limpar e-mail
            </button>
          </>
        )}
      </form>
    </>
  )
}

export default Conditional
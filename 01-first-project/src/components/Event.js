import Form from './Form'
import Button from './Button'

function Event() {

  function firstEvent(){
    console.log(`Ativando primeiro evento...`)
  }

  function secondEvent(){
    console.log(`Ativando segundo evento...`)
  }

  return(
    <>
    <h1>Testando Eventos</h1>
    <p>---------------------------------------------------------------------------------------------------------------</p>
    <p>Clique abaixo para disparar o evento.</p>
    <Button event={firstEvent} text="Primeiro Evento"/>
    <Button event={secondEvent} text="Segundo Evento"/>
    <Form/>
    </>
  )
}

export default Event
import Form from './Form'

function Event() {

  function myEvent(){
    console.log(`Ativadxxxxxxxxxxxxx!`)
  }

  return(
    <>
    <h1>Testando Eventos</h1>
    <p>Clique abaixo para disparar o evento.</p>
    <button onClick={myEvent}>Acessar</button>
    <Form/>
    </>
  )
}

export default Event
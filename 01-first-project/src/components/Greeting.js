function Greeting({ name }) {
  function generateGreeting (someName){
    return `Olá ${someName}, Tudo bem por aí?`
  }

  return <>{name && <p>{generateGreeting(name)}</p>}</>
}

export default Greeting
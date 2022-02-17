function YourName({setName}){
  return (
    <>
    <p>Qual o seu nome?</p>
    <input 
      type="text" 
      placeholder='Qual o seu nome?' 
      onChange={(e) => setName(e.target.value)}
    />
    </>
  )
}

export default YourName
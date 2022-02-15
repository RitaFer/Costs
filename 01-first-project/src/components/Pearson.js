function Pearson ({name, age, photo, profession}) {
  return(
    <div>
      <img src={photo} alt={name}/>
      <h3>Nome: {name}</h3>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
    </div>
  )
}

export default Pearson
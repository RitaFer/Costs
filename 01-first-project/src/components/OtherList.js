function OtherList( { title, itens } ) {
  return (
    <>
      <p>-----------------------------------------------------------------------------------------------------------</p>
      <h3>{title}</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>
      )) : (
        <p>Não há itens na lista.</p>
      )}
    </>
  )
}

export default OtherList
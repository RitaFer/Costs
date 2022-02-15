import Item from './Item'

function List() {
  return(
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" year={1998} />
        <Item marca="Honda" year={2016} />
        <Item marca="Fiat" year={2008} />
      </ul>
    </>
  )
}

export default List
import PropTypes from 'prop-types'

function Item({marca, year}) {
  return(
    <>
      <li>{marca} - {year}</li>
      <p>/////////////////////////////</p>
    </>
  )
}

Item.prototype = {
  marca: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}

Item.defaultProps = {
  marca: "Faltou a marca",
  year: 0,
}



export default Item
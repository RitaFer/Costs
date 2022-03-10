import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import styles from '../service/ServiceCard.module.css'

function ServiceCard({id, name, cost, description, handleRemove, handleEdit}) {
  
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className={styles.serviceCard}>
      <h4>{name}</h4>
      <p><span>Custo Total: </span> R${cost}</p>
      <p>{description}</p>
      <div className={styles.serviceCard_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
        <button>
          <BsPencil />
          Editar
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
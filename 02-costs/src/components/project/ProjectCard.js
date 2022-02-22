import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

function ProjectCard({ id, name, budget, category, handleremove }) {
  
  return (
    <div className={styles.projectCard}>
      <h4>{name.toUpperCase()}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category]}`}></span> {category}
      </p>
      <div className={styles.projectCard_actions}>
        <Link to="#">
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
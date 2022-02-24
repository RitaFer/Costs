import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'

function Project () {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [category, setCategory] = useState([])
  
  const [showProjectForm, setShowProjectForm] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      },
    }).then((resp) => resp.json())
      .then((data) => {
        setCategory(data.category)
        setProject(data)
      }).catch((err) => console.log(err))
  }, [id])

  function toggleProjectForm () {
    setShowProjectForm(!showProjectForm)
  }

  return (
    <div className={styles.project_details}>
    <Container customClass='column'>
      <div className={styles.details_container}>
        <h1>PROJETO: {project.name}</h1>
        {!showProjectForm ? (
          <div className={styles.project_info}>
            <p>
              <span>Categoria: </span> {category.name}
            </p>
            <p>
              <span>Total do Orçamento: </span> R${project.budget}
            </p>
            <p>
              <span>Total Utilizado: </span> R${project.cost}
            </p>
          </div>
        ) : (
          <div className={styles.project_info}>
            <p>Formulário de Atualização do Projeto</p>
          </div>
        )}
        <button onClick={toggleProjectForm} className={styles.btn}>
          {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
        </button>
      </div>
    </Container>
    </div>
  )
}

export default Project
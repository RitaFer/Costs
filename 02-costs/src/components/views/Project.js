import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

function Project () {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [category, setCategory] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)

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

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O Orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setCategory(data.category)
        setShowProjectForm(!showProjectForm)
        setMessage('Projeto atualizado!')
        setType('success')
      })
    }

  function toggleProjectForm () {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm () {
    setShowServiceForm(!showServiceForm)
  }

return (
    <>
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>PROJETO: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                    {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {message && <Message type={type} msg={message} />}
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {category.name}
                  </p>
                  <p>
                    <span>Total do orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.xpto}>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
              </button>
              
            </div>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <div>Teste</div>
                )}
              </div>
              <h2>Serviços:</h2>
              <Container customClass='start'>
                <p>serviços</p>
              </Container>
          </Container>
        </div>
    </>
  )
}

export default Project
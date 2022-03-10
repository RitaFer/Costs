import {parse, v4 as uuidv4 } from 'uuid'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project () {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [category, setCategory] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services, setServices] = useState([])

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
        setServices(data.services)
      }).catch((err) => console.log(err))
  }, [id])

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
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

  function createService(project) {

    const lastService = project.services[project.services.length - 1]
  
    lastService.id = uuidv4()
  
    const lastServiceCost = lastService.cost
  
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        //exibir serviços
        setMessage('')
        setShowServiceForm(false)
      })
  }

  function editService() {

  }

  function removeService(id, cost) {
    const serviceUpdated = project.services.filter(
      (service) => service.id !== id
    )
    
    const projectUpdated = project

    projectUpdated.services = serviceUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
    
    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdated)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated)
        setServices(serviceUpdated)
        setMessage('Serviço removido com sucesso.')
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

              <div className={styles.service}>
                <h2>Serviços</h2>
               <button className={styles.btn} onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                </button>
                <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    textBtn="Adicionar o serviço"
                    projectData={project}
                  /> 
                )}
              </div>
                <Container customClass='start'>
                  {services.length > 0 && 
                    services.map((service) => (
                      <ServiceCard
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.description}
                        key={service.key}
                        handleRemove={removeService}
                        handleChange={editService}
                      />
                    ))
                  }
                  {services.length === 0 && <p>Não há serviços cadastrados no momento.</p> }
                </Container>
              </div>
              
          </Container>
        </div>
    </>
  )
}

export default Project
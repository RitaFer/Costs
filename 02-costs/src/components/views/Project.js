import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project () {

  const { id } = useParams()
  const [project, setProject] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/project/${id}`, {
      method:'GET',
      headers:{
        'Content-Type':'application.json',
      },
    }).then(resp => resp.json())
      .then((data) => {
        setProject(data)
      }).catch((err) => console.log(err))
  }, [id])

  return (
    <>
      <p>TESTANDO</p>
      <p>{project.id}</p>
    </>
  )
}

export default Project
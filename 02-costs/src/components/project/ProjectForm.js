import { useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'
import SubmitButton from '../form/SubmitButton'

function ProjectForm() {

  const [categories,  setCategories] = useState([])

  fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then()
    .catch((err) => console.log(err))

  return (
    <form className={styles.form}>
      <Input 
        type="text"
        text="Nome do Projeto:"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input 
        type="number"
        text="Orçamento do Projeto:"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select 
        name="category_id" 
        text="Selecione a Categoria:"
      />
      <SubmitButton
        text="Criar Projeto"
      />
    </form>
  )
}

export default ProjectForm
import {useEffect, useState} from 'react'

import Input from '../../layout/Input/Input'
import Select from '../../layout/Select/Select'
import SubmitButton from '../../layout/SubmitButton/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {} )

    useEffect(() => {
        fetch(" http://localhost:4000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json()) // Pega a resposta da requisição e transforma em json
        .then(data => setCategories(data))    // Pega os dados e envia para o array categories
        .catch(err => console.log(err))
    }, []);
    
    const submit = e => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
        
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}

            />
            <Select
                name='categoty_id'
                text='Selecione uma categoria'
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
             

        </form>
    )
}
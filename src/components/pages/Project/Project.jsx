import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from '../../layout/Container/Container'
import Loading from '../../layout/Loading/Loading'


import styles from './Project.module.css'


export default function Project() {
    const { id } = useParams()    // para buscar o id da url

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:4000/projects/${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then(resp => resp.json())
            .then(data => {
                setProject(data)
            })
            .catch(err => console.log(err))
        }, 500)
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    
    return (
        <>
            {project.name ? 
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p><span>Category:</span>{project.category.name}</p>
                                    <p><span>Total de Orçamento:</span>{project.budget}</p>
                                    <p><span>Total Utilizado:</span>{project.cost}</p>
                                </div>
                            ): (
                               <div className={styles.project_info}>
                                    <p>form</p>
                               </div>     
                            )}

                        </div>
                    </Container>
                </div> :
                <Loading />}
        </>
    )
}
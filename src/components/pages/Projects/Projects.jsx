import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import LinkButton from '../../layout/LinkButton/LinkButton'
import Container from '../../layout/Container/Container'
import Message from "../../layout/Message/Message";
import ProjectCard from '../../layout/ProjectCard/ProjectCard'


import styles from './Projects.module.css'
import Loading from "../../layout/Loading/Loading";


export default function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:4000/projects', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 500)  
    }, [])


    function removeProject(id) {
        fetch(`http://localhost:4000/projects/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter(project => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projects</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage &&<Message type="success" msg={projectMessage} />}
            
            <Container customClass="start">
                {projects.length > 0 &&
                    
                    projects.map(project => (
                        < ProjectCard
                            id={project.id} 
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name} 
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))          
                }

                {!removeLoading && <Loading />}

                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
                
            </Container>
        </div>
    )
}

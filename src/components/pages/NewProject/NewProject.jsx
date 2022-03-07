import { useNavigate  } from 'react-router-dom'
import ProjectForm from '../../layout/ProjectForm/ProjectForm'
import styles from './NewProject.module.css'

export default function NewProject() {

    const navigate = useNavigate()  //permite redirecionar para outra pagina quando der um POST

    function createPost(project) {
        
        project.cost = 0
        project.services = []

        fetch('http://localhost:4000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project), // manda os dados do project por POST na rota acima
        })
        .then(resp => resp.json())
        .then(() => {
            //redirect
            navigate('/projects', {message: 'Projeto cadastrado com sucesso'})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>
                Crie seu projeto para depois adicionar os serviços
            </p>
            <ProjectForm btnText='Criar Projeto' handleSubmit={createPost}/>
        </div>
    )
}
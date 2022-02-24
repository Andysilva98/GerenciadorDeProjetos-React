import Input from '../../layout/Input/Input'
import Select from '../../layout/Select/Select'
import SubmitButton from '../../layout/SubmitButton/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
            />
            <Select
                name='categoty_id'
                text='Selecione uma categoria'
            />
            <SubmitButton text={btnText} />
             

        </form>
    )
}
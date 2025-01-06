import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './EditModal.module.scss'
import { IPost } from '../../../lib/types'
import { Button, TextField } from '@mui/material'
import { updateById } from '../../../lib/api'

interface IProps {
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    post: IPost
    handleEdit:(values:Partial<IPost>) => void
}

export const EditModal = ({ edit, setEdit, post, handleEdit }: IProps) => {
    const [values,setValues] = useState<Partial<IPost>>({title:"",content:""})
    useEffect(() => {
        const {title,content} = post
        setValues({title,content})

        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [])

    const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLDivElement;
        if (target.id == "close") {
            setEdit(false);
        }
    };

    


    return (
        <div className={styles.wrapper} id='close'>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Edit Post</h3>
                </div>
                <div className={styles.edit}>
                    <TextField
                        label="Title"
                        className={styles.field}
                        value={values.title}
                        onChange={(e) => setValues({...values,title:e.target.value})}
                    />
                    <TextField
                        label="Content"
                        multiline
                        className={styles.field}
                        rows={10}
                        value={values.content}
                        onChange={(e) => setValues({...values,content:e.target.value})}
                    />
                    <Button variant="outlined" className={styles.editBtn} onClick={() => handleEdit(values)}>
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    )
}

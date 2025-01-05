import { Button, TextField } from '@mui/material'
import styles from './AddPost.module.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { useAppSelector } from '../../store/store'
import { addPost } from '../../lib/api'
import { IPost } from '../../lib/types'
import { useNavigate } from 'react-router'

export const AddPost = () => {
    const currentUser = useAppSelector(state => state.user.currentUser)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const handleShare = (data: FieldValues) => {
        const post = { ...data, author: currentUser } as IPost
        addPost(post)
            .then(res => {
                if(res.status == "ok"){
                    navigate("/")
                }
            })
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Any ideas?</h3>
                <div className={styles.addPost}>
                    <form onSubmit={handleSubmit(handleShare)} className={styles.form}>
                        <TextField
                            label="Title"
                            className={styles.field}
                            {...register("title", { required: "Title is required" })}
                        />
                        <TextField
                            label="Content"
                            multiline
                            className={styles.field}
                            rows={4}
                            {...register("content", { required: "Content is required" })}
                        />
                        <Button variant="outlined" className={styles.share} type='submit'>
                            Share
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

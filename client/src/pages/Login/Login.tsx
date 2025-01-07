import { Box, Button, TextField } from '@mui/material'
import styles from './Login.module.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { login } from '../../lib/api'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../store/store'
import { setCurrentUser, updateAuth } from '../../store/actions/userActions'

export const Login = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin = (data: FieldValues) => {
        login(data)
            .then(res => {
                if (res.status === "ok") {
                    dispatch(updateAuth(true))
                    dispatch(setCurrentUser(res.payload))
                    reset()
                    navigate("/")
                }
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Box className={styles.registration}>
                    <h2 className={styles.title}>
                        Log In
                    </h2>
                    <form className={styles.registration_form} onSubmit={handleSubmit(handleLogin)}>
                        <TextField
                            label="Email"
                            variant="standard"
                            {...register("email", { required: "Please fill the required field" })}
                            className={styles.field}
                        />
                        <TextField
                            label="Password"
                            type='password'
                            variant="standard"
                            {...register("password", { required: "Please fill the required field" })}
                            className={styles.field}
                        />
                        <Button variant="contained" className={styles.btn} type='submit'>Log In</Button>
                    </form>
                    <div className={styles.newUser}>
                        <p>New User?</p>
                        <a href="/registration">Sign Up</a>
                    </div>
                </Box>
            </div>
        </div>
    )
}

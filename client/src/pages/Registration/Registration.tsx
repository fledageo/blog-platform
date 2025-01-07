import { FieldValues, useForm } from 'react-hook-form'
import styles from './Registration.module.scss'
import { Box, Button, TextField } from '@mui/material'
import { registration } from '../../lib/api'
import { IUserData } from '../../lib/types'



export const Registration = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm()

    const handleSignUp = (data:FieldValues) => {
        registration(data as IUserData)
        .then(res => {
            if(res.status == "ok"){
                reset()
            }
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Box className={styles.registration}>
                    <h2 className={styles.title}>
                        Sign Up
                    </h2>
                    <form className={styles.registration_form} onSubmit={handleSubmit((e) => handleSignUp(e))}>
                        <div className={styles.name_surname}>
                            <TextField
                                label="Name"
                                variant="standard"
                                {...register("name", { required: "Please fill the required field" })}
                                className={styles.field}
                            />
                            <TextField
                                label="Surname"
                                variant="standard"
                                {...register("surname", { required: "Please fill the required field" })}
                                className={styles.field}
                            />
                        </div>
                        <TextField
                            label="Email"
                            variant="standard"
                            {...register("email", { required: "Please fill the required field" })}
                            className={styles.field}
                        />
                        <TextField
                            label="Password"
                            variant="standard"
                            type='password'
                            {...register("password", { required: "Please fill the required field" })}
                            className={styles.field}
                        />
                        <Button variant="contained" className={styles.btn} type='submit'>Sign Up</Button>
                    </form>
                    <div className={styles.login}>
                        <p>Already have an account?</p>
                        <a href="/login">Sign In</a>
                    </div>
                </Box>
            </div>
        </div>

    )
}

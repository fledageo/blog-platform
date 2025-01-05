import { Button } from '@mui/material'
import styles from './Welcome.module.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAppSelector } from '../../../../store/store';
import { useNavigate } from 'react-router';

export const Welcome = () => {
    const isAuth = useAppSelector(state => state.user.isAuth)
    const navigate = useNavigate()
    const handleAction = () => {
        if(!isAuth){
            navigate("/registration")
        }else{
            navigate("/post/add")            
        }
    }
    return (
        <section className={styles.welcome}>
            <div className={styles.container}>
                <div className={styles.welcomeText}>
                    <h2 className={styles.title}>
                        Unlimited <span>Advice & Resource</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Id voluptatem quia, quam rerum a voluptas dicta ratione necessitatibus aperiam nulla!
                    </p>
                </div>
                <Button className={styles.action} variant='contained' onClick={handleAction}>
                    Share your thinking
                    <FaLongArrowAltRight className={styles.actionIcon}/>
                </Button>
            </div>
        </section>
    )
}

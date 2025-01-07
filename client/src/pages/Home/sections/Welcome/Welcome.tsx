import { Button } from '@mui/material'
import styles from './Welcome.module.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const Welcome = () => {
    const navigate = useNavigate()
    
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
                <Button className={styles.action} variant='contained' onClick={() => navigate("post/add")}>
                    <span>Share</span>
                    <FaLongArrowAltRight className={styles.actionIcon}/>
                </Button>
            </div>
        </section>
    )
}

import { Button } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import { useAppSelector } from '../../../store/store'
import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router';

export const Header = () => {
  const isAuth = useAppSelector(state => state.user.isAuth)

  const navigate = useNavigate()
  const path = useLocation().pathname

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <h1>B'logoo</h1>
          </div>
        </div>
        <div className={styles.column}>
          <nav className={styles.menu}>
            <ul className={styles.menu_list}>
              <li className={styles.list_item}>
                Home
              </li>
              <li className={styles.list_item}>
                Category
              </li>
              <li className={styles.list_item}>
                About
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          {
            (!isAuth && path == "/") &&
            <div className={styles.actions}>
              <a href="/login">Log In</a>
              <a href="/login" className={styles.sign_up}>Sign Up</a>
            </div>
          }
        </div>
      </div>

    </div >
  )
}

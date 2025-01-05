import { useAppDispatch, useAppSelector } from '../../../store/store'
import styles from './Header.module.scss'
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { verifyAuth } from '../../../lib/api';
import { setCurrentUser, updateAuth } from '../../../store/actions/userActions';

export const Header = () => {
  const isAuth = useAppSelector(state => state.user.isAuth)
  const dispatch = useAppDispatch()
  const path = useLocation().pathname

  useEffect(() => {
    verifyAuth()
      .then(res => {
        if (res.status == "ok") {
          dispatch(setCurrentUser(res.payload))
          dispatch(updateAuth(true))
        } else {
          dispatch(updateAuth(false))
        }
      })
  }, [])

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
                <a href="/">Home</a>
              </li>
              <li className={styles.list_item}>
                <a href="/post/add">Add Post</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          {
            (!isAuth && path == "/") ?
              <div className={styles.actions}>
                <a href="/login">Log In</a>
                <a href="/registration" className={styles.sign_up}>Sign Up</a>
              </div>
              :
              <FaRegUserCircle size={30}/>
          }
        </div>
      </div>

    </div >
  )
}

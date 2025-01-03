import styles from './Home.module.scss'
import { useEffect } from 'react'
import { verifyAuth } from '../../lib/api'
import { useAppDispatch } from '../../store/store'
import { updateAuth } from '../../store/actions/userActions'

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    verifyAuth()
      .then(res => {
        if(res.status == "ok"){
          dispatch(updateAuth(true))
        }else{
          dispatch(updateAuth(false))
        }
      })
  },[])

  return (
    <div>Home</div>
  )
}

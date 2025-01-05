import styles from './Home.module.scss'
import { PostsFeed } from './sections/PostsFeed/PostsFeed'
import { Welcome } from './sections/Welcome/Welcome'

export const Home = () => {

  return (
    <div className={styles.wrapper}>
      <Welcome/>
      <PostsFeed/>
    </div>
  )
}

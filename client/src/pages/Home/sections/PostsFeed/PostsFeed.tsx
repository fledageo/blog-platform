import { useEffect } from 'react'
import styles from './PostsFeed.module.scss'
import { getAllPosts } from '../../../../lib/api'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { setAllPosts } from '../../../../store/actions/postsActions'
import { PostCard } from '../../../../components/simple/PostCard/PostCard'

export const PostsFeed = () => {
    const allPosts = useAppSelector(state => state.posts.all)
    const dispatch = useAppDispatch()
    useEffect(() => {
        getAllPosts()
            .then(res => {
                if (res.status == "ok") {
                    dispatch(setAllPosts(res.payload))
                }
            })
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Recent Articles</h2>
                <div className={styles.posts}>
                    {
                        allPosts.map(post => <PostCard key={post._id} post={post} />)
                    }
                </div>
            </div>
        </div>
    )
}

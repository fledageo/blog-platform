import { useNavigate, useParams } from 'react-router'
import styles from './FullPost.module.scss'
import { useEffect, useState } from 'react'
import { deletePostById, getAllPosts, updateById } from '../../lib/api'
import { IPost } from '../../lib/types'
import { Avatar } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setAllPosts } from '../../store/actions/postsActions'
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { EditModal } from '../../components/complex/EditModal/EditModal'

export const FullPost = () => {
    const [post, setPost] = useState<IPost | null>(null)
    const [openEdit, setOpenEdit] = useState<boolean>(false)

    const isAuth = useAppSelector(state => state.user.isAuth)
    const currentUser = useAppSelector(state => state.user.currentUser)

    const all = useAppSelector(state => state.posts.all)
    const dispatch = useAppDispatch()

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        //for suggestion of another articles
        getAllPosts()
            .then(res => {
                if (res.status == "ok") {
                    dispatch(setAllPosts(res.payload))
                }
            })

    }, [])

    useEffect(() => {
        const currentPost = all.find(post => post._id === id)
        setPost(currentPost as IPost)
    }, [all])

    const handleDelete = () => {
        deletePostById(post?._id as string)
            .then(res => {
                if (res.status == "ok") {
                    navigate("/")
                }
            })
    }

    const handleEdit = (values: Partial<IPost>) => {
        updateById(post?._id as string, values)
            .then(res => {
                setOpenEdit(false)
                setPost(res.payload)
            })
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.column_1}>
                    {
                        post && <div className={styles.post}>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <Avatar>
                                        {post?.author.name?.[0]}
                                    </Avatar>
                                    <span>{`${post?.author.name} ${post?.author.surname}`}</span>
                                </div>
                                {
                                    (isAuth && currentUser == post.author._id) &&
                                    <div className={styles.actions}>
                                        <MdModeEditOutline size={20} onClick={() => setOpenEdit(true)} />
                                        <MdDeleteOutline size={20} onClick={handleDelete} />
                                    </div>

                                }
                                {
                                    openEdit && <EditModal edit={openEdit} setEdit={setOpenEdit} post={post} handleEdit={handleEdit} />
                                }
                            </div>
                            <div className={styles.header}>
                                <h1 className={styles.title}>
                                    {post?.title}
                                </h1>
                                <span className={styles.timestamp}>
                                    {
                                        post?.timestamp && new Date(post.timestamp).toLocaleDateString()
                                    }
                                </span>
                            </div>
                            <p className={styles.content}>
                                {post?.content}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

import { Avatar, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import styles from './PostCard.module.scss'
import { IPost, IUserData } from '../../../lib/types'
import { useEffect, useState } from 'react'
import { getUserById } from '../../../lib/api'
import { useNavigate } from 'react-router'

interface IProps {
  post: IPost
}

export const PostCard = ({ post }: IProps) => {
  const navigate = useNavigate()

  const partOfContent = post.content.slice(0, 50)
  const partOfTitle = post.title.slice(0, 50)

  return (
    <Card className={styles.card}>
      <div>
        <CardHeader
          avatar={
            <Avatar>
              {post.author.name?.[0]}
            </Avatar>
          }
          title={`${post.author.name} ${post.author.surname}`}
          subheader={new Date(post.timestamp).toLocaleDateString()}
        />
        <CardContent className={styles.postContent}>
          <h4 className={styles.title}>
            {partOfTitle}
            {
              partOfTitle.length < post.title.length && <span>...</span>
            }
          </h4>
          <p className={styles.content}>
            {partOfContent}
            {
              partOfContent.length < post.content.length && <span>...</span>
            }
          </p>
        </CardContent>
      </div>

      <CardActions>
        <Button size="small" onClick={() => navigate(`/post/${post._id}`)}>Read</Button>
      </CardActions>
    </Card>
  )
}

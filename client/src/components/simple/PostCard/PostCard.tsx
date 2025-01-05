import { Avatar, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import styles from './PostCard.module.scss'
import { IPost, IUserData } from '../../../lib/types'
import { useEffect, useState } from 'react'
import { getUserById } from '../../../lib/api'

interface IProps {
  post: IPost
}

export const PostCard = ({ post }: IProps) => {

  const partOfContent = post.content.slice(0, 50)
  return (
    <Card className={styles.card}>
      <div>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {post.author.name?.[0]}
            </Avatar>
          }
          title={`${post.author.name} ${post.author.surname}`}
          subheader={new Date(post.timestamp).toLocaleDateString()}
        />
        <CardContent className={styles.postContent}>
          <h4 className={styles.title}>{post.title}</h4>
          <p className={styles.content}>
            {partOfContent}
            {
              partOfContent.length < post.content.length && <span>...</span>
            }
          </p>
        </CardContent>
      </div>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

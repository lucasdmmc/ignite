import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState, useEffect } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)

  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigátorio!")
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOn = comments
    .filter(comment => comment !== commentToDelete)

    setComments(commentsWithoutDeletedOn)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>

          } else if(item.type === 'link'){
            return <p key={item.content}><a href="">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm} >
        <strong>Deixe seu comentário</strong>

        <textarea
          name='comment' 
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
         <button type='submit' disabled={isNewCommentEmpty}>
            Comentar 
         </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}
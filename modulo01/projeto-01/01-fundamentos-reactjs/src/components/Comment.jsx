import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({content}) {
  const [addLikes, setAddLikes] = useState(0)

  function handleAddLike() {  
    setAddLikes(addLikes +1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasdmmc.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Carvalho</strong>
              <time title='02 de setembro às 20:27' dateTime='2020-09-02'>Cerca de 1h atŕas</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button name="addLike" onClick={handleAddLike}>
            <ThumbsUp />
            Aplaudir <span>{addLikes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
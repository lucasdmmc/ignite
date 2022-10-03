import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasdmmc.png',
      name: 'Lucas Carvalho',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-03 14:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/skyrons.png',
      name: 'Hugo Souza',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-04 14:30:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* to go through each array we need to use the map method */}
          {posts.map(post => {
            return <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}



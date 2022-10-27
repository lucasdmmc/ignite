import { NavLink } from "react-router-dom"
import { PostHeader, PostPublication } from "./styles"

export function Posts() {
  const posts = [
    {
      id: 1,
      title: "Desenvolvendo com ReactJS",
      description: "Desenvolvi muitos aplicativos com React, e hoje estou muito grando com minhas conquistas",
      createdAt: "Há 1 hora",
    },
    {
      id: 2,
      title: "Desenvolvendo com JavaScript",
      description: "Desenvolvi muitos aplicativos com JavaScript, e hoje estou muito grando com minhas conquistas",
      createdAt: "Há 1 hora"
    }
  ]
  return (
    <>
    {posts.map(post => (
      <NavLink to="/post">
        <PostPublication key={post.id}>
          <PostHeader>
            <strong>{post.title}</strong>
            <span>{post.createdAt}</span>
          </PostHeader>

          <p>{post.description}</p>
        </PostPublication>
      </NavLink>
    ))}
    </>
  )
} 
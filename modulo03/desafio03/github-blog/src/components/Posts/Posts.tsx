import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProfileContext } from "../../context/ProfileContext"
import { CreatedPost } from "../CreatedPost"
import { PostsContainer } from "./styles"

export function Posts() {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Desenvolvendo com ReactJS",
  //     description: "Desenvolvi muitos aplicativos com React, e hoje estou muito grando com minhas conquistas",
  //     createdAt: "Há 1 hora",
  //   },
  //   {
  //     id: 2,
  //     title: "Desenvolvendo com JavaScript",
  //     description: "Desenvolvi muitos aplicativos com JavaScript, e hoje estou muito grando com minhas conquistas",
  //     createdAt: "Há 1 hora"
  //   }
  // ]
  const { issues } = useContext(ProfileContext)
  return (
    <PostsContainer>
        <CreatedPost
          key={String(issues.id)}
          id={issues.id}
          title={issues.title}
          body={issues.body}
          createdAt={issues.createdAt}
        />
    </PostsContainer>
  )

} 
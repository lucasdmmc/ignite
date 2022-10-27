import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProfileContext } from "../../context/ProfileContext"
import { ResearchedPost } from "../ResearchedPost"
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
  console.log(issues)
  return (
    <PostsContainer>
      {issues.map(issue => (
        <ResearchedPost
        key={String(issue.id)}
        id={issue.id}
        title={issue.title}
        body={issue.body}
        created_at={issue.created_at}
        />
      ))}
    </PostsContainer>
  )

} 
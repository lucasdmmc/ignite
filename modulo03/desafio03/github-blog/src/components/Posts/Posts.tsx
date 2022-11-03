import { useContext } from "react"
import ReactMarkdown from "react-markdown"
import { NavLink } from "react-router-dom"
import { ProfileContext } from "../../context/ProfileContext"
import { PostContent } from "../../pages/Post/components/PostContent"
import { ResearchedPost } from "../ResearchedPost"
import { PostsContainer } from "./styles"

export function Posts() {

  const { issues } = useContext(ProfileContext)
  return (
    <PostsContainer>
      {issues.map(issue => (
        <ResearchedPost
          key={String(issue.id)}
          id={issue.id}
          title={issue.title}
          body={<ReactMarkdown children={issue.body} />}
          created_at={issue.created_at}
        />
      ))}
    </PostsContainer>
  )

} 
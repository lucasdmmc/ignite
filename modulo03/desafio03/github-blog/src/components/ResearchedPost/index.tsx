/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProfileContext } from '../../context/ProfileContext'
import { dateFormatter } from '../../utils/Formatter'
import { PostHeader, PostPublication } from './styles'

interface ResearchedPostProps {
  id: number
  title: string
  body: string
  created_at: string
}

export function ResearchedPost({ id, title, body, created_at }: ResearchedPostProps) {
  const { profiles } = useContext(ProfileContext)
  return (
    <>
      <NavLink to={`/issue/${id}`}>
        <PostPublication key={id}>
          <PostHeader>
            <strong>{title}</strong>
            <span>{dateFormatter.format(new Date(profiles.created_at))}</span>
          </PostHeader>

          <p>{body}</p>
        </PostPublication>
      </NavLink>
    </>
  )
}

/* eslint-disable prettier/prettier */
import { create } from 'domain'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileContext } from '../../context/ProfileContext'
import { CreatedPostContainer, PostHeader, PostPublication } from './styles'

interface ResearchedPostProps {
  id: number
  title: string
  body: string
  created_at: string
}

export function ResearchedPost({id, title, body, created_at}: ResearchedPostProps) {
  return (
    <>
      <NavLink to={`/issue/${id}`}>
        <PostPublication key={id}>
          <PostHeader>
            <strong>{title}</strong>
            <span>{created_at}</span>
          </PostHeader>

          <p>{body}</p>
        </PostPublication>
      </NavLink>
    </>
  )
}

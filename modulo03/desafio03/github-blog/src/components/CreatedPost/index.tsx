/* eslint-disable prettier/prettier */
import { create } from 'domain'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileContext } from '../../context/ProfileContext'
import { CreatedPostContainer, PostHeader, PostPublication } from './styles'

interface CreatedPostProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export function CreatedPost({id, title, body, createdAt}: CreatedPostProps) {
  return (
    <>
      <NavLink to="/post">
        <PostPublication key={id}>
          <PostHeader>
            <strong>{title}</strong>
            <span>{createdAt}</span>
          </PostHeader>

          <p>{body}</p>
        </PostPublication>
      </NavLink>
    </>
  )
}

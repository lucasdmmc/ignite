/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom'
import { Posts } from '../Posts/Posts'
import { CreatedPostContainer } from './styles'

interface CreatedPostProps {
  id: number
  title: string
  description: string
  createdAt: string
}

export function CreatedPost({id, title, description, createdAt}: CreatedPostProps) {
  return (
    <CreatedPostContainer>
      <Posts />
    </CreatedPostContainer>
  )
}

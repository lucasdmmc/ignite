/* eslint-disable prettier/prettier */
import { Footer, LinksMenu, MainContainer, PostContainer, PostProfile } from './styles'
import {
  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { api } from '../../lib/axios'
import { dateFormatter } from '../../utils/Formatter'

 export interface InPost {
  id: number
  number: number
  body: string
  title: string
  comments: string
  created_at: string
}

export function Post() {
  const [posts, setPosts] = useState({} as InPost)

  const { profiles } = useContext(ProfileContext)
  const { id } = useParams()

  async function InPost() {
    const response = await api.get(`/repos/lucasdmmc/IGNITE/issues/${id}`)
 
    setPosts(response.data)
  }

  useEffect(() => {
    InPost()
  },[])

  return (
      <PostContainer>
      <PostProfile>
        <LinksMenu>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <NavLink to="#">
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </LinksMenu>

        <strong>{posts.title}</strong>

        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub}/>
            {profiles.name}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay}/>
            {dateFormatter.format(new Date(profiles.created_at))}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment}/>
            {posts.comments} comentários
          </span>
        </Footer>

      </PostProfile>
      <MainContainer>
        <div>
          <strong>{posts.comments}. <span> {posts.body}
          </span>
          </strong>
          <br />
          <br />
          <br />
          <NavLink to="#">
            Dynamic typing
          </NavLink>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in 
            JavaScript are not directly associated with any particular value type,
            and any variable can be assigned (and re-assigned) values of all types:
          </p>
        </div>
      </MainContainer>
    </PostContainer>
      
  )
}

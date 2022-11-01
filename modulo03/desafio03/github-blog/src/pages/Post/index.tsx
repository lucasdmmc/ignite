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

interface PostProfile {
  login: string
  name: string
  created_at: string
}

export function Post() {
  const { issues } = useContext(ProfileContext)
  const { id } = useParams()
  // const [posts, setPosts] = useState<CommentPost[]>([])
  useEffect(() => {
    async function loadIssue() {
      const url = `https://api.github.com/repos/lucasdmmc/IGNITE/issues/${id}`
      // const url = "https://api.github.com/search/issues?q=%20repo:lucasdmmc/IGNITE"
      console.log(url)
      const response = await fetch(url)
      const data = await response.json()

      // const getCommentsFromAPI = data.items.map((item: CommentPost) => {
      //   return {
      //     comments_url: item.comments_url
      //   }
      // })
      
      // setPosts(getCommentsFromAPI)
    }
    loadIssue()
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

        <strong>{}</strong>

        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub}/>
            lucasdmmc
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay}/>
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment}/>
            {} comentários
          </span>
        </Footer>

      </PostProfile>
      <MainContainer>
        <div>
          <strong>Programming languages all have built-in data structures, but 
            these often differ from one language to another. <span> This article 
            attempts to list the built-in data structures available in JavaScript 
            and what properties they have. These can be used to build other data 
            structures. Wherever possible, comparisons with other languages are 
            drawn.
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

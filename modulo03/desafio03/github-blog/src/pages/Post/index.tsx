/* eslint-disable prettier/prettier */
import { Footer, LinksMenu, MainContainer, PostContainer, PostProfile } from './styles'
import {
  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
export function Post() {
  const { id } = useParams()

  useEffect(() => {
    async function loadIssue() {
      const url = `https://api.github.com/repos/lucasdmmc/IGNITE/issues/${id}`
      const response = await fetch(url)
      
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

        <strong>JavaScript data types and data structures</strong>

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
            5 comentários
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

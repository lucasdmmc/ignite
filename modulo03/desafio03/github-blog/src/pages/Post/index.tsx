/* eslint-disable prettier/prettier */
import { LinksMenu, PostContainer, PostProfile } from './styles'
import {
  faArrowUpRightFromSquare, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function Post() {
  return (
    <PostContainer>
      <PostProfile>
        <LinksMenu>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Ver no github
          </a>
        </LinksMenu>
      </PostProfile>
    </PostContainer>
  )
}

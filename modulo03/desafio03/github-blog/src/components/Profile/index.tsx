/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Biography,
  Footer,
  NameProfile,
  ProfileContainer,
  ProfileWrapper,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/lucasdmmc.png" alt="" />
      <ProfileWrapper>
        <NameProfile>
          <strong>Lucas Carvalho</strong>
          <NavLink to="https://github.com/lucasdmmc">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </NameProfile>
        <Biography>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </Biography>
        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            lucasdmmc
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 Seguidores
          </span>
        </Footer>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

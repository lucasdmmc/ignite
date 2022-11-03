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
import { useContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ProfileContext } from '../../context/ProfileContext'

export function Profile() {

  const { profiles } = useContext(ProfileContext)

  return (
    <ProfileContainer>
      <img src={profiles.avatar_url} alt="" />
      <ProfileWrapper>
        <NameProfile>
          <strong>{profiles.name}</strong>
          <a href="https://github.com/lucasdmmc" target={'_blank'}>
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameProfile>
        <Biography>
          <span>{profiles.bio}</span>
        </Biography>
        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profiles.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profiles.followers} followers
          </span>
        </Footer>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

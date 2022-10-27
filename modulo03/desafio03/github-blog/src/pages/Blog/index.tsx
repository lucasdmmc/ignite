/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react'
import { Posts } from '../../components/Posts/Posts'
import { Profile } from '../../components/Profile'
import { ProfileContext } from '../../context/ProfileContext'
import { Post } from '../Post'
import { BlogContainer, Publications, PublicationsContainer } from './styles'


// q=${texto}%20repo:${username}/${repo}

// https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1

// https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge


export function Blog() {

  const { totalCount } = useContext(ProfileContext)

  return (
    <BlogContainer>
      <Profile />

      <PublicationsContainer>
        <Publications>
          <strong>Publicações</strong>
          <span>{totalCount} publicações</span>
        </Publications>
        <input type="text" placeholder="Buscar conteúdo" />
      </PublicationsContainer>

      <Posts />
    </BlogContainer>
  )
}

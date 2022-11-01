/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Posts } from '../../components/Posts/Posts'
import { Profile } from '../../components/Profile'
import { ProfileContext } from '../../context/ProfileContext'
import { BlogContainer, Publications, PublicationsContainer } from './styles'
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


// q=${texto}%20repo:${username}/${repo}

// https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1

// https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge

const searchIssueSchema = zod.object({
  query: zod.string()
})

type SearchIssueInput = zod.infer<typeof searchIssueSchema>

export function Blog() {

  const { totalCount, loadIssues } = useContext(ProfileContext)
  const { register, handleSubmit} = useForm<SearchIssueInput>({
    resolver: zodResolver(searchIssueSchema)
  })

  async function handleSearchIssue(data: SearchIssueInput) {
    await loadIssues(data.query)
  }

  return (
    <BlogContainer>
      <Profile />

      <PublicationsContainer onSubmit={handleSubmit(handleSearchIssue)}>
        <Publications>
          <strong>Publicações</strong>
          <span>{totalCount} publicações</span>
        </Publications>
          <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
      </PublicationsContainer>

      <Posts />
    </BlogContainer>
  )
}

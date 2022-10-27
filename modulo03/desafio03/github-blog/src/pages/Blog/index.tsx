/* eslint-disable prettier/prettier */
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { BlogContainer, Publications, PublicationsContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <PublicationsContainer>
        <Publications>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </Publications>
        <input type="text" placeholder="Buscar conteúdo" />
      </PublicationsContainer>

      <Posts />
    </BlogContainer>
  )
}

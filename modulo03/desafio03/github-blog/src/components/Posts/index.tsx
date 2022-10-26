import { NavLink } from 'react-router-dom'
import { PostHeader, PostPublication, PostsContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <NavLink to="/post">
        <PostPublication>
          <PostHeader>
            <strong>
              JavaScript data types and <br />
              data structures
            </strong>
            <span>Há 1 dia</span>
          </PostHeader>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostPublication>
      </NavLink>
      <PostPublication>
        <PostHeader>
          <strong>
            JavaScript data types and <br />
            data structures
          </strong>
          <span>Há 1 dia</span>
        </PostHeader>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </PostPublication>
    </PostsContainer>
  )
}

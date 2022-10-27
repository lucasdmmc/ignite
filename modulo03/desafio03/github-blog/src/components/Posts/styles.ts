import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`

export const PostPublication = styled.button`
  border: none;
  padding: 3.2rem;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  text-align: left;

  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    margin-top: 2rem;
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme['base-title']};
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: initial;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`

/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 846px;
  margin: 0 auto;
`

export const PostProfile = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  padding: 3.2rem 4rem;
  margin-top: -90px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const LinksMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.blue};

  a {
    display: flex;
    align-items: center;
    gap: 0.8;
    text-decoration: none;
  }
`

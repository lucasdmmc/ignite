/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme['base-profile']};
  color: ${({ theme }) => theme.blue};

  font-size: 2.4rem;
  line-height: 130%;
  text-transform: uppercase;

  font-family: 'Coda', sans-serif;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.25rem;

    margin-top: -46px;
  }
`

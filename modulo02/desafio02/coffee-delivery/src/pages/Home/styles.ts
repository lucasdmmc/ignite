import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 1120px;
  margin: 9.4rem auto;
`

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;
`

export const Title = styled.div`
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 4.6rem;
    line-height: 130%;
    margin-bottom: 1.6rem;
  }

  span {
    font-size: 2rem;
    line-height: 130%;
  }
`

export const Coffees = styled.div`
  margin-top: 10.8rem;

  strong {
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  margin-top: 3.4rem;
`

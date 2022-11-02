import styled from "styled-components";


export const InfoCoffeeDeliveryContainer = styled.div`
  margin-top: 6.6rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 2rem;

`

export const InfoOneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`

export const InfoTwoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.4rem;
`

const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    padding: 0.8rem;
    border-radius: 50%;
  }

  span {
    color: ${props => props.theme['gray-600']};
  }
`

export const InfoOne = styled(BaseInfo)`
  img {
    background: ${props => props.theme['yellow-700']}
  }
`
export const InfoTwo = styled(BaseInfo)`
  img {
    background: ${props => props.theme['gray-600']};
  }
`

export const InfoThree = styled(BaseInfo)`
  img {
    background: ${props => props.theme['yellow-400']}
  }
`
export const InfoFour = styled(BaseInfo)`
  img {
    background: ${props => props.theme['purple-400']}
  }
`
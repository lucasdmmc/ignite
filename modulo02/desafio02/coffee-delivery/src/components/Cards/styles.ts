import styled from 'styled-components'

export const CoffeeCardsContainer = styled.div``

export const CoffeeCards = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`

export const ChooseHowMuchCoffes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

export const MoreOrLess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme['gray-800']};
  }

  button {
    border: 0;
    background: 0;

    cursor: pointer;
    transition: transform 400ms;
  }

  button:hover {
    transform: scale(1.1);
  }
`

export const Cart = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border: 0;
    background: 0;
    background: ${(props) => props.theme['purple-700']};

    border-radius: 6px;

    cursor: pointer;
    transition: transform 400ms;
  }

  button:hover {
    transform: scale(1.1);
  }
`

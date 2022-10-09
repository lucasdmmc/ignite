import styled from "styled-components";

export const CoffeeCardsContainer = styled.div`
  margin-top: 10.8rem;

  strong {
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${props => props.theme['gray-700']};
    font-family: 'Baloo 2', sans-serif;
  }

`

export const Cards = styled.div`
  width: 256px;
  margin-top: 5.4rem;
  background: ${props => props.theme['gray-300']};
  border-radius: 6px 36px;

  text-align: center;
  padding: 2rem 1.6rem;

  header {
    img {
      margin-top: -40px;
    }
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 3.3rem;

    span {
      font-size: 1rem;
      line-height: 130%;
      font-weight: bold;
      border-radius: 100px;
      text-transform: uppercase;
      padding: 0.4rem 0.8rem;
      color: ${props => props.theme['yellow-700']};
      background: ${props => props.theme['yellow-100']};
    }

    strong {
      font-size: 2.0rem;
      line-height: 130%;
      color: ${props => props.theme['gray-700']};
      font-family: 'Baloo 2', sans-serif;
    }

    p {
      font-size: 1.4rem;
      text-align: center;
      line-height: 130%;
      color: ${props => props.theme['gray-500']};
      margin-top: -1.2rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.3rem;
    
    span {
      font-size: 1.4rem;
      line-height: 130%;
      color: ${props => props.theme['gray-600']};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
    }

    span:first-child::after {
      content: '9,90';
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`

export const ChooseHowMuchCoffes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  
  `

export const MoreOrLess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  padding: 0.8rem;
  background: ${props => props.theme['gray-200']};
  border-radius: 6px;

  span {
    color: ${props => props.theme['gray-800']};
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
    padding: .8rem;
    border: 0;
    background: 0;
    background: ${props => props.theme['purple-700']};
    
    border-radius: 6px;
    
    cursor: pointer;
    transition: transform 400ms;
  }

    button:hover {
    transform: scale(1.1);
  }
`
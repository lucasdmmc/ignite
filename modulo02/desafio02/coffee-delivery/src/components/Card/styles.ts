import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 256px;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px 36px;

  text-align: center;
  padding: 2rem;

  transition: transform 400ms;

  &:hover {
    transform: scale(1.1);
  }

  header {
    img {
      margin-top: -40px;
    }
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 1.2rem 0 1.6rem 0;
    }

    span {
      font-size: 1rem;
      line-height: 130%;
      font-weight: bold;
      border-radius: 100px;
      text-transform: uppercase;
      padding: 0.5rem 0.8rem;
      color: ${(props) => props.theme['yellow-700']};
      background: ${(props) => props.theme['yellow-100']};
    }

    strong {
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-700']};
      font-family: 'Baloo 2', sans-serif;
    }

    p {
      font-size: 1.4rem;
      text-align: center;
      line-height: 130%;
      color: ${(props) => props.theme['gray-500']};
      padding: 0.8rem 0 3.3rem 0;
    }
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.3rem;

    span {
      font-size: 1.4rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-600']};

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
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['purple-700']};
  }
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

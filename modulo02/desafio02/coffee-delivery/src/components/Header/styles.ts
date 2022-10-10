import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 1120px;
  margin: 3.2rem auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LocalizationAndCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  ul {
    background: ${props => props.theme['purple-100']};
    border-radius: 6px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 1rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${props => props.theme['purple-700']}
  }

  button {
    background: none;
    border: none;

    background: ${props => props.theme['yellow-100']};
    padding: 1rem;
    border-radius: 6px;

    cursor: pointer;
  }
`
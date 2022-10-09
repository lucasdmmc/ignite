import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 3.2rem 16rem;
  
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

  button {
    background: none;
    border: none;

    background: ${props => props.theme['yellow-100']};
    padding: 1rem;
    border-radius: 6px;
  }
`
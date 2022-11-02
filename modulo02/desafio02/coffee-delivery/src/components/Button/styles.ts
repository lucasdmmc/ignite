import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 3.2rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  button {
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.2rem;

    font-size: 1.2rem;
    text-transform: uppercase;

    padding: 1.75rem 2rem 1.75rem 1.6rem;
    margin-top: -3.2rem;

    border: none;
    border-radius: 6px;
    background: none;
    background: ${(props) => props.theme['gray-300']};

    border: 1px solid transparent;
    cursor: pointer;

    :focus {
      border: 1px solid ${(props) => props.theme['purple-400']};
    }

    :hover {
      background: ${(props) => props.theme['gray-400']};
    }
  }
`

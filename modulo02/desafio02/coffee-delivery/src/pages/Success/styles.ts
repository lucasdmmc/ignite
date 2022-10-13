import styled from 'styled-components'

export const Container = styled.div`
  width: 1120px;
  margin: 8rem auto;

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    strong {
      color: ${(props) => props.theme['yellow-700']};
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 130%;
    }

    span {
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  .mainContainer {
    display: flex;
    align-items: center;
    gap: 13.2rem;

    margin-top: 2.8rem;

    .deliveryFinished {
      padding: 4rem;
      border-radius: 6px 36px;
      border: 1px solid ${(props) => props.theme['purple-700']};

      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      .delivery {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        color: ${(props) => props.theme['gray-600']};

        img {
          padding: 1rem;
          background: ${(props) => props.theme['purple-700']};
          border-radius: 50%;
          display: flex;
          align-items: center;
        }
      }

      .time,
      .payment {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        color: ${(props) => props.theme['gray-600']};

        img {
          padding: 1rem;
          background: ${(props) => props.theme['yellow-700']};
          border-radius: 50%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`

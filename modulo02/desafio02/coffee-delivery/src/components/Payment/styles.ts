import styled from 'styled-components'

export const Container = styled.div`
  .infoConfirmPayment {
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
    margin-bottom: 2.4rem;
    span {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-600']};
    }
    > .coffeeOneContainer {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0.8rem 0.4rem;
      padding-bottom: 2.4rem;

      > .coffeeOne {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .information {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        span {
          color: ${(props) => props.theme['gray-700']};
        }
      }

      .buttonsContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        .moreOrLess {
          background: ${(props) => props.theme['gray-300']};
          border-radius: 6px;

          svg {
            color: ${(props) => props.theme['purple-700']};
          }
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 6px;
          padding: 0.8rem;
        }

        .trash {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: ${(props) => props.theme['gray-300']};

          svg {
            color: ${(props) => props.theme['purple-400']};
          }
        }
      }
    }
  }
`

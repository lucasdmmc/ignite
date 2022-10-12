import styled from 'styled-components'

export const StrongContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: 46.7rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.8rem;
    line-height: 130%;
  }
`

export const CheckoutContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-radius: 6px;
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem; */
`

export const RequestContainer = styled.div`
  width: 640px;
  background: ${(props) => props.theme['gray-100']};
  margin-top: 1.5rem;

  padding: 4rem;

  .adress {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    .information span {
      color: ${(props) => props.theme['gray-700']};
    }

    .information p {
      color: ${(props) => props.theme['gray-600']};
      font-size: 1.6rem;
      margin-top: 0.2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 3.2rem;

    input {
      width: 100%;
      padding: 1.2rem;
      border: none;
      background: none;

      border: 1px solid #e6e5e5;
      border-radius: 4px;

      background: ${(props) => props.theme['gray-200']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    .cep {
      width: 200px;
    }

    .residencia {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .number {
        width: 200px;
      }
    }

    .cityContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      display: flex;
      gap: 1.2rem;

      .bairro {
        width: 200px;
      }

      input {
        width: 100%;
      }

      .uf {
        width: 60px;
      }
    }
  }
`

export const PaymentContainer = styled.div`
  width: 640px;
  margin-top: 1.2rem;
  padding: 4rem;

  background: ${(props) => props.theme['gray-100']};

  .payment {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    .information span {
      color: ${(props) => props.theme['gray-700']};
    }

    .information p {
      color: ${(props) => props.theme['gray-600']};
      font-size: 1.6rem;
      margin-top: 0.2rem;
    }
  }
`

// export const SelectedContainer = styled.div`
//   width: 448px;
//   background: ${(props) => props.theme['gray-300']};
//   padding-top: 1.5rem;
// `

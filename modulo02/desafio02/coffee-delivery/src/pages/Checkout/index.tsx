import { Header } from '../../components/Header'
import localization from '../../assets/CheckoutImages/localization.svg'
import payment from '../../assets/CheckoutImages/payment.svg'
import {
  AdressAndPayment,
  CheckoutContainer,
  PaymentContainer,
  RequestContainer,
  SelectedContainer,
  StrongContainer,
} from './styles'
import { AllButtons } from '../../components/AllButtons'
import { PaymentCard } from '../../components/PaymentCard'
import { Link } from 'react-router-dom'

export function Checkout() {
  return (
    <>
      <Header />
      <StrongContainer>
        <strong>Complete seu pedido</strong>
        <strong>Cafés selecionados</strong>
      </StrongContainer>
      <CheckoutContainer>
        <AdressAndPayment>
          <RequestContainer>
            <div className="adress">
              <img src={localization} alt="" />
              <div className="information">
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <form action="">
              <input className="cep" type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />

              <div className="residencia">
                <input className="number" type="number" placeholder="Número" />
                <input
                  type="text"
                  className="complemento"
                  placeholder="Complemento"
                />
              </div>

              <div className="cityContainer">
                <input className="bairro" type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input className="uf" type="text" placeholder="UF" />
              </div>
            </form>
          </RequestContainer>
          <PaymentContainer>
            <div className="payment">
              <img src={payment} alt="" />
              <div className="information">
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <AllButtons />
          </PaymentContainer>
        </AdressAndPayment>
        <SelectedContainer>
          <PaymentCard />

          <div className="pricesContainer">
            <div className="totalItens">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="entrega">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="totalPrice">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </div>
          <Link to="/success">
            <button className="confirm">Confirmar pedido</button>
          </Link>
        </SelectedContainer>
      </CheckoutContainer>
    </>
  )
}

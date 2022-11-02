import { Header } from '../../components/Header'
import { Container } from './styles'
import successImagine from '../../assets/successImagine/success.svg'
import localization from '../../assets/successImagine/localization.svg'
import time from '../../assets/successImagine/time.svg'
import cash from '../../assets/successImagine/cash.svg'

export function Success() {
  return (
    <>
      <Header />
      <Container>
        <div className="title">
          <strong>Uhu! Pedido confirmado</strong>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>

        <div className="mainContainer">
          <div className="deliveryFinished">
            <div className="delivery">
              <img src={localization} alt="" />
              <div className="description">
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <span> Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div className="time">
              <img src={time} alt="" />
              <div className="deliveryTime">
                <span>Previsão de entrega</span>
                <br></br>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="payment">
              <img src={cash} alt="" />
              <div className="description">
                <span>Pagamento na entrega</span>
                <br></br>
                <strong>Cratão de crédito</strong>
              </div>
            </div>
          </div>

          <img src={successImagine} alt="" />
        </div>
      </Container>
    </>
  )
}

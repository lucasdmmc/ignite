import { IntroContainer, IntroContent, IntroText } from "./styles";
import introImg from "../../../../assets/intro-img.png"
import { RegularText } from "../../../../components/Typography";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroText size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroText>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a 
              <br></br>qualquer hora
            </RegularText>
          </section>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  )
}
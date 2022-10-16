import { IntroContainer, IntroContent } from "./styles";
import introImg from "../../../../assets/intro-img.png"

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>

        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  )
}
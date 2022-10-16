import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees/Index";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
import { ReactNode } from "react";
import { IconContainer, InfoWithIConContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode
  iconBg: string
  text: string | ReactNode
}

export function InfoWithIcon({ icon, iconBg, text}: InfoWithIconProps) {
  return (
    <InfoWithIConContainer>
      <IconContainer iconBg={iconBg}>
        {icon}
      </IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIConContainer>
  )
}
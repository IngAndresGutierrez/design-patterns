import React, { FC } from "react"

interface ButtonProps {
  type: "primary" | "secondary" | "disabled"
  label: string
}

const PrimaryButton = ({ label }: { label: string }) => (
  <button style={{ backgroundColor: "blue", color: "white" }}>{label}</button>
)

const SecondaryButton = ({ label }: { label: string }) => (
  <button style={{ backgroundColor: "gray", color: "black" }}>{label}</button>
)

const DisabledButton = ({ label }: { label: string }) => (
  <button disabled>{label}</button>
)

export const ButtonFactory: FC<ButtonProps> = ({ type, label }) => {
  switch (type) {
    case "primary":
      return <PrimaryButton label={label} />
    case "secondary":
      return <SecondaryButton label={label} />
    case "disabled":
      return <DisabledButton label={label} />
    default:
      return null
  }
}

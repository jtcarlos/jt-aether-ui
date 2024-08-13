import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type ButtonSize = "xs" | "sm" | "md" | "lg"
export type ButtonVariant = "default" | "primary" | "secondary" | "danger" | "success" | "warning" | "outlined"

export type ButtonIcon = { left?: IconDefinition; right?: IconDefinition }

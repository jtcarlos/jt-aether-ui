import React from "react"
import classNames from "classnames"
import { buttonSize, buttonVariant } from "./button.config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch, IconDefinition } from "@fortawesome/free-solid-svg-icons"

type ButtonSize = "xs" | "sm" | "md" | "lg"
type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "outlined" | "text"

type ButtonIcon = { left?: IconDefinition; right?: IconDefinition }

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
  className?: string

  loading?: boolean
  disabled?: boolean

  size?: ButtonSize
  icon?: ButtonIcon
  variant?: ButtonVariant
  children?: React.ReactNode
}

/**
 * @description Aether UI Button component
 *
 * @param {string} text determines the text to display inside the button
 * @param {string} className overrides the button classes
 *
 * @param {boolean} loading determines whether if the button is loading or not
 * @param {boolean} disabled determines whether if the button is disbaled or not
 *
 * @param {ButtonSize} size determines the size of the button
 * @param {ButtonIcon} icon specifies the icon displayed to either the left or right side of the button
 * @param {ButtonVariant} variant determines the variant of the button
 *
 * @returns {ReactNode} renders Aether UI's button component
 */
const Button: React.FC<ButtonProps> = ({ children, text, size = "md", variant = "primary", ...props }) => {
  let textSize = buttonSize[size]
  let buttonColor = buttonVariant[variant]

  return (
    <button
      {...props}
      type={props?.type || "button"}
      disabled={props?.disabled || props?.loading}
      className={classNames(
        textSize,
        buttonColor,
        "px-3 py-2 h-fit w-fit border rounded-md transition-colors disabled:opacity-75",
        props?.className
      )}
    >
      {props?.icon?.left && !props?.loading && (
        <span className={classNames({ "mr-2": text || children })}>
          <FontAwesomeIcon icon={props?.icon.left} />
        </span>
      )}
      {props?.loading && <FontAwesomeIcon icon={faCircleNotch} className="animate-spin mr-2" />}
      {text ?? children}
      {props?.icon?.right && !props?.loading && (
        <span className={classNames({ "ml-2": text || children })}>
          <FontAwesomeIcon icon={props?.icon.right} />
        </span>
      )}
    </button>
  )
}

export default Button

import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { buttonSize, buttonVariant } from "./button.config"
import { ButtonSize, ButtonVariant, ButtonIcon } from "./button.types"

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
const Button: React.FC<ButtonProps> = ({ children, text, size = "md", variant = "default", ...props }) => {
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
        "rounded-md font-semibold shadow-sm transition-colors disabled:opacity-75",
        props?.className
      )}
    >
      {props?.icon?.left && !props?.loading && (
        <span className={classNames({ "mr-2": text || children })}>
          <FontAwesomeIcon icon={props?.icon.left} />
        </span>
      )}
      {props?.loading && (
        <svg
          className="h-3.5 w-3.5 mr-2 mt-[-0.25rem] text-white inline-block animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      )}
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

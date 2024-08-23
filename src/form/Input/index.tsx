import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons"

import { InputVariants } from "./input.types"
import { inputVariant } from "./input.config"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  helper?: string
  placeholder: string

  error?: boolean
  showPassword?: boolean

  icon?: IconDefinition
  variant?: InputVariants

  onPasswordShow?: () => void
}

/**
 * @description Aether UI's form input component
 *
 * @param {string} name name of the field input
 * @param {string} helper helper text to display below the field input
 * @param {string} placeholder helper text to display below the field input
 *
 * @param {boolean} error sets the error state of the component
 * @param {boolean} showPassword sets the password text visibility state of the component
 *
 * @param {IconDefinition} icon sets the icon of the form input
 * @param {InputVariants} variant sets the variant of the form input
 *
 * @param {Function} onPasswordShow sets the callback function when the 'eye' button is clicked
 *
 * @returns renders Aether UI's form input component
 */
const Input: React.FC<InputProps> = ({
  type,
  name,
  icon,
  error,
  helper,
  placeholder,
  variant = "inside",
  ...props
}) => {
  const config = inputVariant[variant]

  const textColor = error ? "text-danger" : "text-gray-500"
  const borderColor = error ? "border-danger" : "border-gray-200 focus:border-gray-500"

  return (
    <div className="relative w-full mb-3">
      {icon && <FontAwesomeIcon className="absolute top-3 left-3 p-2 rounded-full text-gray-400" icon={icon} />}

      <input
        {...props}
        name={name}
        placeholder={placeholder}
        type={props?.showPassword ? "text" : type}
        className={classNames(config.input, borderColor, { "pl-12": !!icon })}
      />
      <label htmlFor={name} className={classNames(config.label, { "pl-[3.20rem]": !!icon }, textColor)}>
        {placeholder}
      </label>

      {type === "password" && (
        <button
          onClick={props?.onPasswordShow}
          className="absolute top-[0.45rem] right-3 p-2 rounded-full text-gray-400"
        >
          <FontAwesomeIcon icon={props?.showPassword ? faEyeSlash : faEye} />
        </button>
      )}

      {helper && (
        <div className={classNames("flex items-center mt-1 pl-[0.2rem] text-xs", textColor)}>
          {error && <FontAwesomeIcon icon={faCircleExclamation} className="mr-1.5" />}
          {helper}
        </div>
      )}
    </div>
  )
}

export default Input

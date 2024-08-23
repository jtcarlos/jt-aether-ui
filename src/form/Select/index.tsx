import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

interface SelectProps
  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  name: string
  label: string
  options: string[]
  placeholder?: string
  errorMessage?: string
}

/**
 * @description Aether UI's form select component
 *
 * @param {string} name name of the form select
 * @param {string} label label of the form select
 * @param {string[]} options options of the form select
 * @param {string} placeholder placeholder of the form select
 * @param {string} errorMessage error message of the form select
 *
 * @returns renders Aether UI's form select component
 */
const Select: React.FC<SelectProps> = ({ name, placeholder, label, options, errorMessage, ...props }) => {
  const borderColor = errorMessage ? "border-danger" : "border-gray-200 focus-within:border-gray-500"

  return (
    <div className="relative w-full mb-3">
      <div className={classNames("border border-[#CCCFDB] rounded-md text-sm", borderColor)}>
        <select
          {...props}
          name={name}
          className="peer p-3 block w-full rounded-md outline-none disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 border-r-8 border-transparent"
        >
          {placeholder && <option className="hidden">{placeholder}</option>}
          {options?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">
          {label}
        </label>
      </div>
      {errorMessage && (
        <div className="flex items-center mt-1 pl-[0.2rem] text-xs text-danger">
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-1.5" />
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Select

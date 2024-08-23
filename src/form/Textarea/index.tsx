import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  name: string
  label: string
  errorMessage?: string
}

/**
 * @description Aether UI's form textarea component
 *
 * @param {string} name name of the form textarea
 * @param {string} label label of the form textarea
 * @param {string} errorMessage error message of the form checkbox
 *
 * @returns renders Aether UI's textarea component
 */
const Textarea: React.FC<TextareaProps> = ({ name, label, errorMessage, ...props }) => {
  const borderColor = errorMessage ? "border-danger" : "border-gray-200 focus:border-gray-500"

  return (
    <div className="relative w-full mb-3">
      <textarea
        {...props}
        name={name}
        placeholder={label}
        className={classNames(
          "peer block w-full p-4 text-sm border outline-none rounded-md placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 no-ms-clear",
          borderColor
        )}
      />
      <label
        htmlFor={name}
        className="absolute top-0 start-0 origin-[0_0] p-4 h-full text-sm text-gray-500 truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 no-ms-clear"
      >
        {label}
      </label>
      {errorMessage && (
        <div className="flex items-center mt-1 pl-[0.2rem] text-xs text-danger">
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-1.5" />
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Textarea

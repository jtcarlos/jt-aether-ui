import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

import { CheckboxLayout } from "./checkbox.types"

interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  label?: string
  options: string[]
  fieldValues: string[]
  errorMessage?: string
  layout?: CheckboxLayout
  onValueChange: (values: never[]) => void
}

/**
 * @description Aether UI's form checkbox component
 *
 * @param {string} name name of the form checkbox
 * @param {string} label label of the form checkbox
 * @param {string[]} options options of the form checkbox
 * @param {string[]} fieldValues current values of the form checkbox
 * @param {string} errorMessage error message of the form checkbox
 * @param {CheckboxLayout} layout layout of the form checkbox
 * @param {Function} setValue callback for setting the form's value
 *
 * @returns renders Aether UI's checkbox component
 */
const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  options,
  fieldValues,
  errorMessage,
  onValueChange,
  layout = "vertical",
  ...props
}) => {
  const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    let newFieldValue: string[] = [...fieldValues]

    if (event.target.checked) newFieldValue.push(option)
    else newFieldValue = newFieldValue.filter((fieldValue) => fieldValue !== option)

    onValueChange(newFieldValue as any)
  }

  return (
    <div>
      <svg className="absolute w-0 h-0 select-none pointer-events-none">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>

      {label && (
        <label htmlFor={name} className="block mb-1 text-sm">
          {label}
        </label>
      )}

      <div
        className={classNames(
          "rounded-lg inline-block",
          { "p-2 mb-2 bg-red-100": errorMessage },
          { flex: layout === "horizontal" }
        )}
      >
        {options?.map((option) => (
          <div
            key={option}
            className={classNames({
              "mb-1 last:mb-0": layout === "vertical",
              "mr-1 last:mr-0": layout === "horizontal",
            })}
          >
            <div className={classNames("hover:bg-primary-lighter rounded-md")}>
              <input
                {...props}
                id={option}
                name={name}
                value={option}
                type="checkbox"
                onChange={(event) => onOptionChange(event, option)}
                className={classNames("peer absolute hidden checkbox-input")}
              />
              <label
                htmlFor={option}
                className={classNames(
                  "group flex cursor-pointer py-1.5 px-2 rounded-md overflow-hidden select-none transition-all duration-300 ease-in-out checkbox"
                )}
              >
                <span className="relative flex-shrink-0 flex-grow-0 basis-[1.125rem] w-[1.125rem] h-[1.125rem] border border-[#cccfdb] rounded align-middle transform scale-100 transition-all duration-300 ease-in-out translate-x-0 translate-y-0 translate-z-0 group-hover:border-primary checkbox-box">
                  <svg
                    className="absolute top-[0.188rem] left-0.5 fill-none stroke-white stroke-dasharray-16 stroke-dashoffset-16 transition-all duration-300 ease-in-out translate-x-0 translate-y-0 translate-z-0"
                    width="0.75rem"
                    height="10px"
                  >
                    <svg width="0.75rem" height="10px">
                      <use href="#check" />
                    </svg>
                  </svg>
                </span>
                <span className="pl-2 text-[0.875rem] leading-[1.125rem]">{option}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      {errorMessage && (
        <div className={classNames("flex items-center mt-1 pl-[0.2rem] text-xs text-danger")}>
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-1.5" />
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default Checkbox

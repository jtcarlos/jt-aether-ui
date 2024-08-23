import React from "react"
import classNames from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

import { RadioLayout } from "./radio.types"

interface RadioProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  label?: string
  options: string[]
  layout?: RadioLayout
  errorMessage?: string
  onValueChange: (value: string) => void
}

/**
 * @description Aether UI's form radio component
 *
 * @param {string} name name of the form radio
 * @param {string} label label of the form radio
 * @param {string[]} options options of the form radio
 * @param {RadioLayout} layout layout of the form radio
 * @param {string} errorMessage error message of the form radio
 * @param {Function} onValueChange callback for setting the form's value
 *
 * @returns renders Aether UI's radio component
 */
const Radio: React.FC<RadioProps> = ({ name, label, options, errorMessage, onValueChange, layout = "vertical" }) => {
  return (
    <div className="mb-3">
      <svg className="absolute w-0 h-0 select-none pointer-events-none">
        <symbol id="circle" viewBox="0 0 30 30">
          <circle cx="9" cy="9" r="4" />
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
          { "p-2 bg-red-100 bg-opacity-50": errorMessage },
          {
            flex: layout === "horizontal",
          }
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
            <div className="inline-block color-[#222] hover:bg-primary-lighter rounded-md">
              <input
                id={option}
                name={name}
                type="radio"
                value={option}
                className="peer absolute hidden radio-input"
                onChange={() => onValueChange(option)}
              />
              <label
                htmlFor={option}
                className="group flex cursor-pointer py-1.5 px-2 rounded-md overflow-hidden user-select-none transition-all duration-300 ease-in-out radio"
              >
                <span className="relative flex-shrink-0 flex-grow-0 basis-[1.25rem] w-5 h-5 rounded-full border border-[#CCCFDB] transition-all duration-300 ease-in-out group-hover:border-primary">
                  <svg
                    className="absolute top-[0.019rem] left-0 fill-none stroke-none transition-all duration-300 ease-in-out translate-x-0 translate-y-0 translate-z-0"
                    width="30px"
                    height="30px"
                  >
                    <svg width="30px" height="30px">
                      <use href="#circle"></use>
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

export default Radio

import React from "react"
import classNames from "classnames"

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { dropdownSize, dropdownVariant } from "./dropdown.config"
import { DropdownOptions, DropdownSize, DropdownVariant } from "./dropdown.types"

interface DropdownProps {
  text?: string
  className?: string
  isVisible?: boolean
  onClick?: () => void

  size?: DropdownSize
  options: DropdownOptions
  variant?: DropdownVariant
  children?: React.ReactNode
}

/**
 * @description Aether UI's dropdown component
 *
 * @param {string} text determines the text to display inside the dropdown
 * @param {string} className overrides the default class name of the dropdown component
 * @param {boolean} isVisible shows the dropdown menu when set to true
 * @param {Function} onClick callback function when the dropdown button is clicked
 * @param {DropdownSize} size size of the dropdown button
 * @param {DropdownOptions} options options on the dropdown menu
 * @param {DropdownVariant} variant variant of the dropdown menu
 *
 * @returns renders Aether UI's dropdown component
 */
const Dropdown: React.FC<DropdownProps> = ({
  text,
  options,
  onClick,
  children,
  className,
  isVisible,
  size = "md",
  variant = "default",
}) => {
  const textSize = dropdownSize[size]
  const dropdownColor = dropdownVariant[variant]

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={onClick}
        className={classNames(
          textSize,
          className,
          dropdownColor,
          "peer rounded-md font-semibold shadow-sm transition-colors disabled:opacity-75"
        )}
      >
        {text ?? children}
        <span className={classNames({ "ml-2": text || children })}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>

      <div
        role="menu"
        aria-orientation="vertical"
        className={classNames(
          "absolute min-w-60 bg-white mt-2 p-1 space-y-0.5 rounded-lg shadow-md opacity-0 pointer-events-none z-10 transition-[opacity,margin] group-hover:opacity-100 group-hover:pointer-events-auto after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-2 before:start-0 before:w-full",
          {
            "opacity-100 pointer-events-auto": isVisible,
          }
        )}
      >
        {options?.map((option) => (
          <button
            type="button"
            onClick={option?.onClick}
            className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Dropdown

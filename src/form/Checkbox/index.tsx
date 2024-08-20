import React from "react"
import classNames from "classnames"

import styles from "./checkbox.module.css"
import { CheckboxLayout } from "./checkbox.types"

interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  label: string
  options: string[]
  fieldValues: string[]
  layout: CheckboxLayout
  setValue: (name: string, values: never[]) => void
}

/**
 * @description Aether UI's form checkbox component
 *
 * @param {string} name name of the form checkbox
 * @param {string} label label of the form checkbox
 * @param {string[]} options options of the form checkbox
 * @param {string[]} fieldValues current values of the form checkbox
 * @param {CheckboxLayout} layout layout of the form checkbox
 * @param {Function} setValue callback for setting the form's value
 *
 * @returns renders Aether UI's checkbox component
 */
const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  options,
  setValue,
  fieldValues,
  layout = "vertical",
  ...props
}) => {
  const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    let newFieldValue: string[] = [...fieldValues]

    if (event.target.checked) newFieldValue.push(option)
    else newFieldValue = newFieldValue.filter((fieldValue) => fieldValue !== option)

    setValue(name, newFieldValue as any)
  }

  return (
    <div>
      <svg className="absolute w-0 h-0 select-none pointer-events-none">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="1.5 6 4.5 9 10.5 1"
          ></polyline>
        </symbol>
      </svg>

      <label htmlFor={name} className="block mb-1 text-sm">
        {label}
      </label>

      <div className={classNames("rounded-lg inline-block")}>
        {options?.map((option) => (
          <div
            key={option}
            className={classNames({
              "mb-1 last:mb-0": layout === "vertical",
              "mr-1 last:mr-0": layout === "horizontal",
            })}
          >
            <div className={classNames("hover:bg-primary-lighter", styles["checkbox-container"])}>
              <input
                {...props}
                id={option}
                name={name}
                value={option}
                type="checkbox"
                onChange={(event) => onOptionChange(event, option)}
                className={classNames("peer checkbox-input", styles["checkbox-input"])}
              />
              <label htmlFor={option} className={classNames("group checkbox", styles["checkbox"])}>
                <span className="group-hover:border-primary checkbox-box">
                  <svg width="0.75rem" height="10px">
                    <svg width="0.75rem" height="10px">
                      <use href="#check" />
                    </svg>
                  </svg>
                </span>
                <span className="text-[14px]">{option}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checkbox

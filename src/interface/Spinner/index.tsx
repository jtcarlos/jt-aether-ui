import React from "react"
import classNames from "classnames"

import { Sizes } from "./spinner.types"
import { sizes } from "./spinner.config"

interface SpinnerProps {
  color?: string
  size?: Sizes
}

/**
 * @description Aether UI's spinner component
 *
 * @param {string} color determines the color of the spinner
 * @param {"xs" | "sm" | "md" | "lg"} size determines the size of the spinner in rem
 *
 * @returns render Aether UI's spinner component
 */
const Spinner: React.FC<SpinnerProps> = ({ color, size = "md" }) => {
  const dimension = sizes[size]

  return (
    <div>
      <svg
        className={classNames(dimension, "mr-2 mt-[-0.25rem] text-white inline-block animate-spin")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color || "black"} stroke-width="4" />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill={color || "black"}
        />
      </svg>
    </div>
  )
}

export default Spinner

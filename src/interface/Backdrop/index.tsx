import React from "react"
import classNames from "classnames"

interface BackdropProps {
  color?: string
  width?: string
  height?: string
  isVisible?: boolean
}

/**
 * @description Aether UI's backdrop component
 *
 * @param {string} color determines the color of the spinner in the backdrop
 * @param {string} height determines the height of the spinner
 * @param {string} width determines the width of the spinner
 * @param {boolean} isVisible determines whether to show the spinner
 *
 * @returns render Aether UI's backdrop component
 */
const Backdrop: React.FC<BackdropProps> = ({ color = "white", height = "h-12", width = "w-12", isVisible = true }) => {
  if (isVisible)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity z-10" aria-hidden="true">
        <svg
          className={classNames(height, width, "absolute block left-50 top-1/2 left-1/2 text-white animate-spin")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color || "black"} strokeWidth="4" />
          <path
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill={color || "black"}
          />
        </svg>
      </div>
    )
  return null
}

export default Backdrop

import React from "react"
import classNames from "classnames"

interface SkeletonRectangleProps {
  className?: string
}

/**
 * @description Aether UI's rectangular skeleton
 * @param {string} className overrides the style classs of the
 * @returns renders Aether UI's rectangular skeleton
 */
const SkeletonRectangle: React.FC<SkeletonRectangleProps> = ({ className }) => {
  return <div role="status" className={classNames("h-[1rem] mb-3 bg-gray-200 rounded-full animate-pulse", className)} />
}

export default SkeletonRectangle

import React from "react"

import SkeletonUser from "./SkeletonUser"
import SkeletonImage from "./SkeletonImage"
import SkeletonRectangle from "./SkeletonRectangle"

import { Variants } from "./skeleton.types"

interface SkeletonProps {
  variant?: Variants
  className?: string
}

/**
 * @description Aether UI's skeleton component
 *
 * @param {Variants} variant determines the variant of the skeleton loader
 * @param {string} className overrides the style classes of the component
 *
 * @returns renders Aether UI's skeleton component
 */
const Skeleton: React.FC<SkeletonProps> = ({ variant = "rectangle", className }) => {
  switch (variant) {
    case "image":
      return <SkeletonImage className={className} />
    case "user":
      return <SkeletonUser className={className} />
    case "rectangle":
    default:
      return <SkeletonRectangle className={className} />
  }
}

export default Skeleton

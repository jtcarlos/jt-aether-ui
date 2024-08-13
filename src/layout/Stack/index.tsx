import React from "react"
import classNames from "classnames"

import { Alignments, Justifications, Directions } from "./stack.types"
import { stackDirection, stackAlignment, stackJustification } from "./stack.config"

interface StackProps {
  gap?: string
  align?: Alignments
  className?: string
  direction?: Directions
  justify?: Justifications
  children: React.ReactNode
}

/**
 * @description stacks all children either in a vertical or horizontal manner
 *
 * @param {Alignments} align determines the flex alignment of the items
 * @param {Directions} direction determines the flex direction of the items
 * @param {Justifications} justify determines the flex justification of the items
 *
 * @param {string} gap determines the gap of the flex items
 * @param {string} className overrides the default classes
 *
 * @returns {React.ReactNode} renders the children in stacked
 */
const Stack: React.FC<StackProps> = ({
  gap,
  children,
  align = "start",
  justify = "normal",
  direction = "col",
  ...props
}) => {
  const justification = stackJustification[justify]
  const flowDirection = stackDirection[direction]
  const alignment = stackAlignment[align]

  return (
    <div className={classNames(justification, alignment, flowDirection, "flex gap-4", gap, props?.className)}>
      {children}
    </div>
  )
}

export default Stack

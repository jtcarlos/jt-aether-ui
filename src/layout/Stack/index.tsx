import React from "react"
import classNames from "classnames"

import { stackDirection, stackAlignment, stackJustification } from "./stack.config"

type directions = "row" | "col"
type alignments = "start" | "end" | "center" | "baseline" | "stretch"
type justifications = "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch"

interface StackProps {
  gap?: string
  align?: alignments
  className?: string
  direction?: directions
  justify?: justifications
  children: React.ReactNode
}

/**
 * @description stacks all children either in a vertical or horizontal manner
 *
 * @param {alignments} align determines the flex alignment of the items
 * @param {directions} direction determines the flex direction of the items
 * @param {justifications} justify determines the flex justification of the items
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

import React from "react"
import classNames from "classnames"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * @description Aether UI container component
 *
 * @param {string} className style class overrides for the modal component
 *
 * @returns renders Aether UI's modal component
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames("container mx-auto px-6", className)}>{children}</div>
}

export default Container

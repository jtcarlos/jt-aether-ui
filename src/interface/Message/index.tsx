import React from "react"
import classNames from "classnames"

import Stack from "../../layout/Stack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Variants } from "./message.types"
import { messageVariants } from "./message.config"

interface MessageProps {
  fit?: boolean
  text?: string
  variant?: Variants
  children?: React.ReactNode
}

/**
 * @description Aether UI message component
 *
 * @param {Variants} variant determines the variant of the message component
 * @param {boolean} fit defaults to false, if set to true the component will take up the remaining width space
 * @param {string} text determines the text to display inside the message
 *
 * @returns {React.ReactNode} renders Aether UI's message component
 */
const Message: React.FC<MessageProps> = ({ children, text, variant = "info", fit = true }) => {
  const config = messageVariants[variant]

  return (
    <article
      className={classNames("border-l-4 border border-slate-100 rounded-md p-5 border", config.color, {
        "w-full md:w-[38rem]": fit,
      })}
    >
      <Stack direction="row">
        <FontAwesomeIcon className={classNames("mt-1", config.iconColor)} icon={config.icon} />
        {text ?? children}
      </Stack>
    </article>
  )
}

export default Message

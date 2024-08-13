import React from "react"
import classNames from "classnames"

import { FooterBody, FooterLinks } from "./footer.types"

interface FooterProps {
  body: FooterBody
  links?: FooterLinks
  className?: string
}

/**
 * @description Aether UI footer component
 *
 * @param {FooterBody} body main content of the footer component
 * @param {FooterLinks} links sets the footer links
 * @param {string} className style class overrides for the footer component
 *
 * @returns renders Aether UI's footer component
 */
const Footer: React.FC<FooterProps> = ({ body, links, className }) => {
  return (
    <footer className={classNames("mt-20 py-5 px-6 text-center border-t-2 border-slate-200", className)}>
      <div className={classNames(body?.className)}>{body.content}</div>
      <ul className="mt-3 flex justify-center">
        {links?.map((link, index) => (
          <li
            className="py-1 px-5 text-sm font-medium border-l border-primary-light hover:text-primary first:border-0"
            key={index}
          >
            <a href={link?.link} target={link?.target || "_self"}>
              {link?.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer

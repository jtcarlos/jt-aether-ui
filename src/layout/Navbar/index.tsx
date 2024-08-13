import React from "react"
import classNames from "classnames"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { navbarAlignment } from "./navbar.config"
import { NavbarLinks, NavbarLogo, Alignments, DesktopAddon, MobileAddon } from "./navbar.types"

interface NavbarProps {
  logo: NavbarLogo
  links: NavbarLinks
  align?: Alignments
  mobileAddon?: MobileAddon
  desktopAddon?: DesktopAddon

  className?: string
  pageTitle?: string
  isDrawerOpen?: boolean

  setIsDrawerOpen?: () => void
}

/**
 * @description Aether UI navbar component
 *
 * @param {NavbarLogo} logo sets the logo details such as source and sizings
 * @param {NavbarLinks} links sets the navigation links
 * @param {Alignments} align sets the alignment of the navigation links
 * @param {string} pageTitle current page title, used to check if what link to highlight
 * @param {MobileAddon} mobileAddon mobile addons beside the hamburder icon
 * @param {DesktopAddon} desktopAddon desktop addons beside the navigation links
 *
 * @returns renders Aether UI's navbar component
 */
const Navbar: React.FC<NavbarProps> = ({
  logo,
  links,
  pageTitle,
  className,
  mobileAddon,
  desktopAddon,
  isDrawerOpen,
  align = "end",
  setIsDrawerOpen,
}) => {
  const alignment = navbarAlignment[align]

  return (
    <nav className={classNames("sticky top-0 z-10 mb-10 border-b bg-white border-gray-200", className)}>
      <div className="container mx-auto px-6 py-3 flex flex-wrap md:flex-nowrap justify-between items-center">
        <img
          width={logo.width}
          alt={logo.imageAlt}
          height={logo.height}
          src={logo.imageSource}
          onClick={logo.onLogoClick}
          className="cursor-pointer"
        />

        <div className="flex items-center">
          {mobileAddon && <div className={classNames("md:hidden", mobileAddon?.className)}>{mobileAddon.addon}</div>}
          <button
            type="button"
            aria-expanded="false"
            onClick={setIsDrawerOpen}
            aria-controls="navbar-dropdown"
            data-collapse-toggle="navbar-dropdown"
            className="md:hidden rounded-lg inline-flex items-center p-2 ml-2 text-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className={classNames("w-full flex", alignment)} id="navbar-dropdown">
          <ul
            className={classNames(
              { "hidden md:flex": !isDrawerOpen },
              "rounded-md p-4 mt-4 w-full md:w-auto md:p-0 md:mt-0 md:space-x-2 border md:border-0 font-medium flex items-center flex-col md:flex-row border-gray-100 bg-gray-50 md:bg-white"
            )}
          >
            {links?.map((item, index) => (
              <li key={index} className="w-full md:w-auto">
                <button
                  className={classNames(
                    "px-3 py-2 w-full md:w-auto rounded-md text-left border border-transparent hover:bg-primary-lighter hover:text-primary transition-colors ",
                    {
                      "bg-primary text-white md:bg-white md:text-primary": pageTitle === item?.label,
                    }
                  )}
                  onClick={item?.onClick}
                >
                  {item?.label}
                </button>
              </li>
            ))}

            {desktopAddon && (
              <div className={classNames("hidden md:block border-l border-primary-light", desktopAddon?.className)}>
                {desktopAddon?.addon}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

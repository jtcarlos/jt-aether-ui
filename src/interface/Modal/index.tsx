import React from "react"
import classNames from "classnames"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { sizes } from "./modal.config"
import { ModalSize, ModalContent } from "./modal.types"

interface ModalProps {
  open: boolean
  hidable?: boolean
  className?: string

  onHide?: () => void

  size?: ModalSize
  body?: ModalContent
  header?: ModalContent
  footer?: ModalContent
}

/**
 * @description Aether UI modal component
 *
 * @param {boolean} open determines whether to show or hide the modal
 * @param {boolean} hidable determines whether the modal is hidable
 * @param {string} className style class overrides for the modal component
 *
 * @param {Function} onHide callback function to hide the modal
 *
 * @param {ModalSize} size the size of the modal
 * @param {ModalContent} header the header of the modal
 * @param {ModalContent} body the main body of the modal
 * @param {ModalContent} footer the footer of the modal
 *
 * @returns renders Aether UI's modal component
 */
const Modal: React.FC<ModalProps> = ({
  open,
  body,
  header,
  footer,
  onHide,
  className,
  size = "sm",
  hidable = true,
}) => {
  const modalSize = sizes[size]

  return (
    <div
      role="dialog"
      tabIndex={-1}
      aria-labelledby="aether-ui-modal"
      className={classNames(
        "fixed w-screen h-screen top-0 left-0 z-10 overflow-x-hidden overflow-y-auto transition-all duration-200 ease-in-out",
        {
          "opacity-100": open,
          "opacity-0 pointer-events-none": !open,
        }
      )}
    >
      <div onClick={() => hidable && onHide?.()} className="fixed size-full top-0 bg-black bg-opacity-40 start-0"></div>
      <div className="fixed bottom-0 my-6 mx-4 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-70%]">
        <div
          className={classNames(
            modalSize,
            "relative transform overflow-hidden rounded-lg bg-white shadow-xl my-0 sm:my-0 sm:w-full transition-all duration-200 ease-in-out",
            {
              "bottom-0 md:bottom-0 md:scale-100": open,
              "bottom-10 md:bottom-0 md:scale-95": !open,
            }
          )}
        >
          {hidable && (
            <button
              onClick={onHide}
              className="hidden sm:block fixed top-1 right-2 rounded-full p-1.5 text-center text-gray-400 hover:text-gray-900 transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          <div className={classNames("bg-white px-4 py-5 sm:p-6 text-center sm:text-left", className)}>
            {header?.content && (
              <h3
                className={classNames(
                  "text-xl font-semibold leading-6 text-gray-900 mt-3 mb-5 sm:mt-0",
                  header?.className
                )}
                id="aether-modal-title"
              >
                {header.content}
              </h3>
            )}
            {body?.content && <div className={classNames("mt-2 text-gray-600", body.className)}>{body.content}</div>}
          </div>
          {footer?.content && (
            <div className={classNames("bg-gray-50 px-4 py-4 sm:px-6", footer?.className)}>{footer?.content}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal

import React from "react"
import classNames from "classnames"

import Stack from "../../layout/Stack"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ModalContent = {
  className?: string
  content: React.ReactNode
}

interface ModalProps {
  open: boolean
  hideClose?: boolean
  className?: string

  onHide?: () => void

  body?: ModalContent
  header?: ModalContent
  footer?: ModalContent
}

/**
 * @description Aether UI modal component
 *
 * @param {boolean} open determines whether to show or hide the modal
 * @param {boolean} hideClose determines whether to show or hide the x-mark on the modal
 * @param {string} className style class overrides for the modal component
 *
 * @param {Function} onHide callback function to hide the modal
 *
 * @param {ModalContent} header the header of the modal
 * @param {ModalContent} body the main body of the modal
 * @param {ModalContent} footer the footer of the modal
 *
 * @returns renders Aether UI's modal component
 */
const Modal: React.FC<ModalProps> = ({ open, hideClose, className, header, body, footer, onHide }) => {
  if (!open) return null

  return (
    <div className="relative z-10" aria-labelledby="aether-modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" aria-hidden="true" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {!hideClose && (
              <button
                onClick={onHide}
                className="hidden sm:block absolute top-1 right-2 rounded-full p-1.5 text-center text-gray-400 hover:text-gray-900 transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}
            <div className={classNames("bg-white px-4 py-5 sm:p-6", className)}>
              {header?.content && (
                <h3
                  className={classNames("text-2xl font-semibold leading-6 text-gray-900 mb-5", header?.className)}
                  id="aether-modal-title"
                >
                  {header.content}
                </h3>
              )}
              {body?.content && <div className={classNames("mt-2 text-gray-600", body.className)}>{body.content}</div>}
            </div>
            {footer?.content && (
              <Stack className={classNames("bg-gray-50 px-4 py-4", footer?.className)}>{footer?.content}</Stack>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

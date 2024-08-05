import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons"

export const messageVariants = {
  info: {
    icon: faCircleInfo,
    iconColor: "text-info",
    color: "border-l-info bg-info-message",
  },
  success: {
    icon: faCircleCheck,
    iconColor: "text-success",
    color: "border-l-success bg-success-message",
  },
  danger: {
    icon: faCircleExclamation,
    iconColor: "text-danger",
    color: "border-l-danger bg-danger-message",
  },
  warning: {
    icon: faTriangleExclamation,
    iconColor: "text-warning",
    color: "border-l-warning bg-warning-message",
  },
}

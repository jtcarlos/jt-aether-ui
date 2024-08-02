import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons"

export const messageVariants = {
  info: {
    icon: faCircleInfo,
    color: "text-primary",
    border: "border-l-primary",
  },
  success: {
    icon: faCircleCheck,
    color: "text-success",
    border: "border-l-success",
  },
  danger: {
    icon: faCircleExclamation,
    color: "text-danger",
    border: "border-l-danger",
  },
  warning: {
    icon: faTriangleExclamation,
    color: "text-warning",
    border: "border-l-warning",
  },
}

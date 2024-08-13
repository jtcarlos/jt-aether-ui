import React from "react"

export type navbarLogo = {
  width: number
  height: number
  imageAlt: string
  imageSource: string
  onLogoClick?: () => void
}

export type desktopAddon = {
  className?: string
  addon?: React.ReactNode
}

export type mobileAddon = {
  className?: string
  addon?: React.ReactNode
}

export type alignments = "start" | "center" | "end"
export type navbarLinks = { label: string; onClick?: () => void }[]

import React from "react"

export type NavbarLogo = {
  width: number
  height: number
  imageAlt: string
  imageSource: string
  onLogoClick?: () => void
}

export type DesktopAddon = {
  className?: string
  addon?: React.ReactNode
}

export type MobileAddon = {
  className?: string
  addon?: React.ReactNode
}

export type Alignments = "start" | "center" | "end"
export type NavbarLinks = { label: string; onClick?: () => void }[]

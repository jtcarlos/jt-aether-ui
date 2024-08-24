export type FooterBody = {
  content: React.ReactNode
  className?: string
}

export type FooterLinks = {
  link?: string
  target?: string
  label: React.ReactNode
}[]

export type FooterLogo = {
  width: number
  height: number
  imageAlt: string
  imageSource: string
  onLogoClick?: () => void
}

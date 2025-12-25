'use client'

import { useTheme } from 'nextra-theme-docs'
import Image from 'next/image'

interface ThemeLogoProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width?: number
  height?: number
}

const ThemeLogo = ({ lightSrc, darkSrc, alt, width = 100, height = 100 }: ThemeLogoProps) => {
  const { theme, resolvedTheme } = useTheme()

  const currentTheme = resolvedTheme || theme
  const logoSrc = currentTheme === 'dark' ? darkSrc : lightSrc

  return <Image src={logoSrc} alt={alt} width={width} height={height} priority />
}

export default ThemeLogo

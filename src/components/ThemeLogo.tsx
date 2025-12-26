'use client'

import { useTheme } from 'nextra-theme-docs'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ThemeLogoProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width?: number
  height?: number
}

const ThemeLogo = ({ lightSrc, darkSrc, alt, width = 100, height = 100 }: ThemeLogoProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR and initial client render, use light theme to avoid hydration mismatch
  // After mounting, use the resolved theme
  const logoSrc = mounted && resolvedTheme === 'dark' ? darkSrc : lightSrc

  return <Image src={logoSrc} alt={alt} width={width} height={height} priority />
}

export default ThemeLogo

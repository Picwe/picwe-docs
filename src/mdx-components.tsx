import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'nextra/mdx-components'

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  const themeComponents = getThemeComponents()
  return {
    ...themeComponents,
    ...components,
  }
}

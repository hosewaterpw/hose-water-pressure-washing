'use client'

/**
 * Standard scaffolding that came with the project. It exists to support a
 * light/dark mode switch.
 * This site is always light, so it does nothing visible - but removing it
 * would mean editing several other files, so it stays.
 */
import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

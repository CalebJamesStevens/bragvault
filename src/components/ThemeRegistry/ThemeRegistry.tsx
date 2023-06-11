'use client'

import { theme } from "@/components/theme"
import { ThemeProvider } from "@mui/material"

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

'use client'

import { theme } from "@/components/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <CssBaseline/>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

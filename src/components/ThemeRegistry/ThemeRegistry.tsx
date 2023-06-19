'use client'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { theme } from "@/components/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

const queryClient = new QueryClient()

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
    </QueryClientProvider>
  )
}

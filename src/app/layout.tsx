import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"

export const metadata = {
  title: 'Brag Vault',
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeRegistry>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeRegistry>
  )
}

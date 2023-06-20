import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"
import NavBar from "./components/NavBar/NavBar";

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
        <body>
          <NavBar/>
          {children}
        </body>
      </html>
    </ThemeRegistry>
  )
}

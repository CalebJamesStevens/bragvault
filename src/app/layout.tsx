import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"
import NavBar from "./components/NavBar/NavBar";
import Login from "./login";

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
          <Login />
          {children}
        </body>
      </html>
    </ThemeRegistry>
  )
}

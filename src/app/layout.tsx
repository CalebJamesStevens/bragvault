import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry"
import NavBar from "./components/NavBar/NavBar";
import Login from "./login";
import Footer from "./components/Footer/Footer";

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
      <html style={{height: '100%'}} lang="en">
        <body style={{height: '100%'}}>
          <NavBar/>
          <Login />
          <div style={{height: '100%'}}>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ThemeRegistry>
  )
}

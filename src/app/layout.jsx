import Header from "@/components/Header"
import "./globals.css"
import '@fortawesome/fontawesome-free/css/all.css'


export const metadata = {
  title: "MusicVerse | Home",
  description: "Ouça suas músicas favoritas"
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <head>
        
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

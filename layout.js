import "./globals.css";
import { Header, Footer, Aside } from "./components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="LayoutContainer">
        <Aside />
        <div className="MainContainer">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </html>
  );
}

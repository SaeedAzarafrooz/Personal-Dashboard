import global from "./css/global.module.css";
import "./css/reset.css"
import { Header, Footer, Aside } from "./components";
import { Fragment } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Fragment className={global.all}>
      <div className={global.LayoutContainer}>
        <Aside />
        <div className={global.MainContainer}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </Fragment>
    </html>
  );
}

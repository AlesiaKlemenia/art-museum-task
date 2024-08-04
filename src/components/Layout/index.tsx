import "./styles.scss";

import Footer from "@components/Layout/Footer";
import Header from "@components/Layout/Header";
import { ILayoutProps } from "@components/Layout/interfaces";

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Header />
    <div className="wrapper">{children}</div>
    <Footer />
  </>
);

export default Layout;

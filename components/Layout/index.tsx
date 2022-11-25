import { ReactNode } from "react";
import Head from "next/head";
interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
    <Head>
      <title>Tutorial</title>
      <meta name="description" content="Tutorial" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        {children}
    </main>
  </div>
  );
};

export default Layout;

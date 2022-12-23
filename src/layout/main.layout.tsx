import dynamic from "next/dynamic";
import React from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  const Header = dynamic(() => import("./header.component"), { ssr: false });
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

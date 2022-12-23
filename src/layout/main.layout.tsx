import dynamic from "next/dynamic";

interface IMainLayout {
  children: JSX.Element;
}

export const MainLayout = ({ children }: IMainLayout) => {
  const Header = dynamic(() => import("./header.component"), { ssr: false });
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

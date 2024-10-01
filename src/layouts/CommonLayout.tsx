import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

export default function CommonLayout({ children }: Props) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

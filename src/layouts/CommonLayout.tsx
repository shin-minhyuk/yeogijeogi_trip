import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRecoilValue } from "recoil";
import { searchModalState } from "../atoms/atoms";
import { SearchModal } from "../components/SearchModal";

type Props = {
  children: ReactNode;
};

export default function CommonLayout({ children }: Props) {
  const isModalOn = useRecoilValue(searchModalState);

  return (
    <div>
      <Header />
      <main className='mt-[140px]'>
        {isModalOn && <SearchModal />}
        {children}
      </main>
      <Footer />
    </div>
  );
}

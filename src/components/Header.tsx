import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <div className="flex h-[80px] justify-between items-center px-[5%]">
        <h1 className="text-2xl font-[700]">여기저기</h1>
        <FaSearch />
      </div>
    </header>
  );
}

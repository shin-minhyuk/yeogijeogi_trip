import { FaSearch } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchModalState, themeState } from "../../atoms/atoms";

export default function SearchBtn() {
  const isDarkMode = useRecoilValue(themeState);
  const [isModalOn, setIsModalOn] = useRecoilState(searchModalState);

  const handleSearch = () => {
    setIsModalOn(true);
    console.log("모달 상태: ", isModalOn);
  };
  return (
    <button onClick={handleSearch}>
      <FaSearch size={24} color={isDarkMode ? "#FAFAFA" : "#212121"} />
    </button>
  );
}

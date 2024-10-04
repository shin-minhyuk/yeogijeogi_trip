import { MdDarkMode, MdLightMode } from "react-icons/md";
import { themeState } from "../../atoms/atoms";
import { useRecoilState } from "recoil";

export default function ToggleThemeBtn() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const handleToggleBtn = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem("THEME-MODE", isDarkMode ? "light" : "dark");
  };

  return (
    <button onClick={handleToggleBtn}>
      {isDarkMode ? (
        <MdLightMode size={26} color="#FAFAFA" />
      ) : (
        <MdDarkMode size={26} color="#212121" />
      )}
    </button>
  );
}

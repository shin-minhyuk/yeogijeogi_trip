import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Festival from "./pages/Festival";
import Content from "./pages/Content";
import Search from "./pages/Search/Search";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { themeState } from "./atoms/atoms";
import Tour from "./pages/Tour";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);

  useEffect(() => {
    const prevModeSetting = localStorage.getItem("THEME-MODE");

    if (!prevModeSetting) {
      localStorage.setItem("THEME-MODE", "light");

      setIsDarkMode(false);
    } else {
      setIsDarkMode(prevModeSetting === "dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      root.style.backgroundColor = "#1a202c";
      body.style.backgroundColor = "#1a202c";
      body.style.color = "#f7fafc";
    } else {
      root.style.backgroundColor = "#f7fafc";
      body.style.backgroundColor = "#f7fafc";
      body.style.color = "#1a202c";
    }

    localStorage.setItem("THEME-MODE", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/festival" element={<Festival />} />
      <Route path="/content" element={<Content />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;

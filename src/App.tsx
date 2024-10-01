import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Festival from "./pages/Festival";
import Content from "./pages/Content";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/festival' element={<Festival />}></Route>
      <Route path='/content' element={<Content />}></Route>
      <Route path='/search' element={<Search />}></Route>
    </Routes>
  );
}

export default App;

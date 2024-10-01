import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/'></Route>
      <Route path='/festival'></Route>
      <Route path='/content/:contentId'></Route>
      <Route path='/search'></Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Articles } from "./components/header/articles/Articles";
import { About } from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import JokePage from "./pages/JokePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joke" element={<JokePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

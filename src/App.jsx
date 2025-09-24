import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import JokePage from "./pages/JokePage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/joke">Joke | </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joke" element={<JokePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

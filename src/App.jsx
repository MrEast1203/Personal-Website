import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router basename="/personal-website">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;

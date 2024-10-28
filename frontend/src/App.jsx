import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/login" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

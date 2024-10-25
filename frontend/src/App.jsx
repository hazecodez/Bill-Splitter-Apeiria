import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
      </Routes>
    </Router>
  )
}

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HompePage from "./pages/HompePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HompePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

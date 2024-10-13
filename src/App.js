import { BrowserRouter, Route, Routes } from "react-router-dom";
import LaboratoryDetailes from "./pages/LaboratoryDetailes";
import LaboratoryList from "./pages/LaboratoryList";

function App() {
  return (
    <div className="lims-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaboratoryList />}></Route>
          <Route
            path="/laboratories/:id"
            element={<LaboratoryDetailes />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

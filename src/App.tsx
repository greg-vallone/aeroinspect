import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard";
import Sites from "./pages/sites";
import Inspections from "./pages/inspections";
import InspectionDetails from "./pages/inspection-details";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>

      <div className="app-layout">
        <Sidebar/>

        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/sites" element={<Sites/>} />
            <Route path="/inspections" element={<Inspections/>} />
            <Route path="/inspections/:inspectionId" element={<InspectionDetails/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
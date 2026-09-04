import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard/dashboard";

import "./App.css"

const App = () => {
  return (
    <>
      <Header/>

      <div className="app-layout">
        <Sidebar/>
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
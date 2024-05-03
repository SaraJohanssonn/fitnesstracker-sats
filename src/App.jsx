import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Pages content are displayed in the outlet */}
    </>
  );
}

export default App;

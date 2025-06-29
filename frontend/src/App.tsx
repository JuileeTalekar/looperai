import { Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import Authintication from "./components/Authintication/Authintication";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex h-screen">
      <Routes>
        {/* Authintication */}
        <Route path="/auth/*" element={<Authintication />} />

        {/* Main Application */}
        <Route path="/*" element={<Root />} />
      </Routes>
      <Toaster position="top-center"/>
    </div>
  );
}

export default App;

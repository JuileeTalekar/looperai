import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const MainComponent = () => {
  return (
    <div className="w-[100%] flex flex-col h-screen">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <div className="flex-1 bg-[#282C35] p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/transactions" element={<div>Transactions</div>} />
          <Route path="/wallet" element={<div>Wallet</div>} />
          <Route path="/analytics" element={<div>Analytics</div>} />
          <Route path="/personal" element={<div>Personal</div>} />
          <Route path="/messages" element={<div>Messages</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainComponent;

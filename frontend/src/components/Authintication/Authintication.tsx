import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

const Authintication = () => {
  return (
    <div className="flex min-h-screen justify-center items-center w-screen bg-[#282C35] overflow-auto">
      <Routes>
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Authintication;

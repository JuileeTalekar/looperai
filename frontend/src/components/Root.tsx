import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { RootContext } from "./RootContext";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Root = () => {
  const navigate = useNavigate();
  const [cookies,removeCookie] = useCookies(["token"]);
  const [userId, setUserId] = React.useState<string | null>(null);
  const [transactions, setTransactions] = React.useState<any[]>([]);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          `${VITE_BACKEND_URL}`,
          {},
          { withCredentials: true }
        );

        const { status, userId } = data;

        if (status === false) {
          removeCookie("token", { path: "/" });
          navigate("/auth/signin");
          return;
        }

        setUserId(userId);
        localStorage.setItem("userId", userId);
      } catch (error) {
        console.error("Error verifying cookie:", error);
      }
    };

    verifyCookie();
  }, [cookies.token, removeCookie, navigate]);

  useEffect(() => {
    if (userId) {
      const getTransactions = async () => {
        try {
          const { data } = await axios.get(
            `${VITE_BACKEND_URL}/getTransactionsByUserId/${userId}`
          );
          setTransactions(data.transactions);
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };
      getTransactions();
    }
  }, [userId]);

  const Logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/auth/signin");
  };

  if (!userId || !transactions) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-[#282C35]">
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <RootContext.Provider value={{ userId, transactions, logout: Logout }}>
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainComponent />
      </RootContext.Provider>
    </>
  );
};

export default Root;

import { useContext } from "react";
import { RootContext } from "./RootContext";

const Header = () => {
  const { transactions } = useContext(RootContext);

  const convertToCSV = (data: any[]) => {
    const csvHeaders = [
      "_id",
      "date",
      "amount",
      "category",
      "status",
      "user_id",
    ];

    const csvRows = [
      csvHeaders.join(","),
      ...data.map((tx) =>
        csvHeaders
          .map((field) => {
            const value = tx[field];
            return typeof value === "string" &&
              (value.includes(",") || value.includes("\n"))
              ? `"${value}"`
              : value;
          })
          .join(",")
      ),
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#1A1C22] flex items-center justify-between px-6 py-2 h-[75px]">
      <h1 className="font-bold text-white text-2xl">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative max-md:hidden flex items-center gap-4">
          <button
            className="bg-gradient-to-r from-purple-500 to-purple-800 py-1 px-2 rounded-md text-white font-semibold cursor-pointer"
            onClick={() => convertToCSV(transactions)}
          >
            Export CSV
          </button>
          <input
            type="text"
            className="bg-[#282C35] h-[34px] w-[215px] rounded-md px-2 text-slate-300"
            placeholder="Search..."
          />
          <i className="fa-solid fa-magnifying-glass text-slate-300 absolute right-3 top-2.5"></i>
        </div>

        <div className="relative flex items-center">
          <i className="fa-regular fa-bell text-xl text-slate-300"></i>
          <div className="absolute top-0 right-0 bg-green-400 rounded-full size-2"></div>
        </div>
        <div>
          <img
            src="ProfileIcon.jpg" // Replace with your user avatar URL
            alt="User Avatar"
            className="rounded-md w-[33px] h-[33px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

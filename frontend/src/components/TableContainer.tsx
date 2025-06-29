
import React, { useState } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

const TableContainer = () => {
  const Navigate = useNavigate();
  const [filter, setFilter] = useState<string>("All");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("search", value);
    Navigate(`${window.location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="mt-6 bg-[#1A1C22] p-6 rounded-lg flex flex-col gap-6">
      <div className="flex items-center mb-6 flex-wrap gap-x-20">
        <h1 className="text-white text-2xl font-semibold">Transactions</h1>
        <div className="relative max-lg:hidden">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-[#282C35] h-[34px] w-[400px] rounded-md px-2 text-slate-300 max-xl:w-[200px]"
              placeholder="Search by Person..."
            />
          </form>
          <i className="fa-solid fa-magnifying-glass text-slate-300 absolute right-3 top-2.5"></i>
        </div>
        <div className="relative inline-block max-md:hidden">
          <i className="fa-solid fa-filter absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
          <select
            className="pl-8 pr-4 py-2 text-slate-300 border border-slate-300 rounded bg-slate-800"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">Advance filter options</option>
            <option value="Amt_Desending">Amount Desending</option>
            <option value="Amt_Assending">Amount Assending</option>
            <option value="St_Completed">Status Completed</option>
            <option value="Pending">Status Pending</option>
            <option value="Date_Recent">Date Recent</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <Table filter={filter} />
    </div>
  );
};

export default TableContainer;

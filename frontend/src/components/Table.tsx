import {
  categoryBadgeStyles,
  getRandomName,
} from "@/constants";
import { cn } from "@/lib/utils";
import  { useContext } from "react";
import { RootContext } from "./RootContext";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagenation";

const CateroryBadge = ({ category }: { category: string }) => {
  const { backgroundColor, textColor } =
    categoryBadgeStyles[category as keyof typeof categoryBadgeStyles];

  return (
    <span
      className={cn(
        `px-2 py-1 rounded-full font-semibold text-sm`,
        backgroundColor,
        textColor
      )}
    >
      {category === "Paid" ? "Completed" : category}
    </span>
  );
};

const Table = ({ filter }: { filter: string }) => {
  const ITEMS_PER_PAGE = 5;
  const { transactions } = useContext(RootContext);
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);


  const applyTransactionFilter = (transactions: any, filter: any) => {
    switch (filter) {
      case "Amt_Desending":
        return [...transactions].sort((a, b) => b.amount - a.amount);

      case "Amt_Assending":
        return [...transactions].sort((a, b) => a.amount - b.amount);

      case "St_Completed":
        return transactions.filter((tx: any) => tx.status === "Paid");

      case "Pending":
        return transactions.filter((tx: any) => tx.status === "Pending");

      case "Date_Recent":
        return [...transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

      case "All":
      default:
        return transactions;
    }
  };

  const filtered = applyTransactionFilter(transactions, filter);
  const paginatedData = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );


  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#282C35] text-slate-300 text-left">
            <th className="px-4 py-2 rounded-l-lg text-left">Name</th>
            <th className="px-4 py-2 text-left md:table-cell hidden">Date</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 rounded-r-lg text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((transaction: any) => (
            <tr key={transaction._id}>
              <td className="px-4 py-2">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[35px] h-[35px] rounded-lg md:block hidden"
                    src={transaction.user_profile}
                  />
                  <span className="text-white font-semibold">
                    {getRandomName().name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-2 text-white font-semibold md:table-cell hidden">
                {new Date(transaction.date).toLocaleDateString("en-IN")}
              </td>
              <td
                className={`px-4 py-2 font-semibold ${
                  transaction.category === "Expense"
                    ? "text-[#e4be14]"
                    : "text-green-500"
                }`}
              >
                {transaction.category === "Revenue" ? "+" : "-"}
                {transaction.amount}
              </td>
              <td className="px-4 py-2">
                <CateroryBadge category={transaction.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} ITEM_PER_PAGE={ITEMS_PER_PAGE} count={filtered.length}/>
    </div>
  );
};

export default Table;

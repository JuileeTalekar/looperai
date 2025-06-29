import { recentTransactions } from "@/constants";

const RecentTransactions = () => {

  return (
    <div className="bg-[#1A1C22] p-6 rounded-lg w-full xl:w-1/3 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white text-2xl font-semibold">
          Recent Transactions
        </h1>
        <button className="text-[#3dfc03] text-sm font-semibold cursor-pointer">
          See All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {recentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b-2 border-[#2c2f36] pb-4"
          >
            <div className="flex items-center gap-4">
              <img className="w-[40px] h-[40px]" src={transaction.iconUrl} />
              <div className="flex flex-col gap-1">
                <span className="text-slate-300 text-[13px] font-semibold">
                  {transaction.type === "Recieved"
                    ? "Transfers from"
                    : "Transfers to"}
                </span>

                <span className="text-white text-[15px] font-semibold">
                  {transaction.person}
                </span>
              </div>
            </div>
            <span
              className={`font-bold text-sm ${
                transaction.type === "Recieved"
                  ? "text-[#3dfc03]"
                  : "text-[#e4be14]"
              }`}
            >
              {transaction.type === "Recieved" ? "+" : "-"}
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;

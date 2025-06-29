import { useContext } from "react";
import CashCard from "./CashCard";
import { RootContext } from "./RootContext";

const CardContainer = () => {
  const { transactions } = useContext(RootContext);

  const cardData = [
    { name: "Balance", iconUrl: "Balance.png" },
    { name: "Revenue", iconUrl: "Revenue.png" },
    { name: "Expenses", iconUrl: "Expenses.png" },
    { name: "Savings", iconUrl: "Savings.png" },
  ];

  const totals = transactions.reduce(
    (acc, tx) => {
      if (tx.category === "Revenue") {
        acc.Revenue += tx.amount;
        acc.Balance += tx.amount;
      } else if (tx.category === "Expense") {
        acc.Expenses += tx.amount;
        acc.Balance -= tx.amount;
      }
      return acc;
    },
    {
      Revenue: 0,
      Expenses: 0,
      Balance: 0,
      Savings: 10000, // can be computed separately if needed
    }
  );

  const finalCardData = cardData.map((card) => ({
    ...card,
    value: totals[card.name] || 0,
  }));


  return (
    <div className="flex flex-wrap justify-between gap-4">
      {finalCardData.map((card) => (
        <CashCard iconUrl={card.iconUrl} type={card.name} value={card.value} key={card.name}/>
      ))}
    </div>
  );
};

export default CardContainer;

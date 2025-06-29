

export const navItems = [
  {
    name: "Dashboard",
    iconUrl: "dashboard",
    route: "/",
  },
  {
    name: "Transactions",
    iconUrl: "transactions",
    route: "/transactions",
  },
  {
    name: "Wallet",
    iconUrl: "wallet",
    route: "/wallet",
  },
  {
    name: "Analytics",
    iconUrl: "analytics",
    route: "/analytics",
  },
  {
    name: "Personal",
    iconUrl: "personal",
    route: "/personal",
  },
  {
    name: "Messages",
    iconUrl: "messages",
    route: "/messages",
  },
  {
    name: "Settings",
    iconUrl: "settings",
    route: "/settings",
  },
];

export const cardData = [
  {
    name: "Balance",
    iconUrl: "Balance.png",
  },

  {
    name: "Revenue",
    iconUrl: "Revenue.png",
  },

  {
    name: "Expenses",
    iconUrl: "Expenses.png",
  },

  {
    name: "Savings",
    iconUrl: "Savings.png",
  },
];

export const recentTransactions = [
  {
    id: 1,
    type: "Recieved",
    amount: "$54.08",
    person: "Matheus Ferrero",
    iconUrl: "/Recent1.png",
    status: "Completed",
    date: "2023-10-01",
  },
  {
    id: 2,
    type: "Sent",
    amount: "$39.65",
    person: "Floyd Miles",
    iconUrl: "/Recent2.png",
    status: "Completed",
    date: "2023-10-02",
  },
  {
    id: 3,
    type: "Sent",
    amount: "$29.65",
    person: "Jerome Bell",
    iconUrl: "/Recent3.png",
    status: "Pending",
    date: "2023-10-03",
  },
];


export const categoryBadgeStyles = {
  Paid: {
    backgroundColor: "bg-[#1FCB4F4D]",
    textColor: "text-green-400",
  },
  Pending: {
    backgroundColor: "bg-[#876b07]",
    textColor: "text-yellow-400",
  },
}

export const randomNameAndIcon = [
  {
    name: "Matheus Ferrero",
  },
  {
    name: "Floyd Miles",
  },
  {
    name: "Jerome Bell",
  },
  {
    name: "Cameron Williamson",
  },
  {
    name: "Darlene Robertson",
  },
]

export const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * randomNameAndIcon.length);
  return randomNameAndIcon[randomIndex];
}

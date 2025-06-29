import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartSelector from "./ChartSelector";

const data = [
  { month: "Jan", income: 5000, expense: 3000 }, // Profit
  { month: "Feb", income: 5200, expense: 3500 }, // Profit
  { month: "Mar", income: 4800, expense: 5000 }, // Loss
  { month: "Apr", income: 5300, expense: 4200 }, // Profit
  { month: "May", income: 5500, expense: 3900 }, // Profit
  { month: "Jun", income: 4800, expense: 5100 }, // Loss (Holidays, school break)
  { month: "Jul", income: 4700, expense: 5200 }, // Loss (Summer vacation)
  { month: "Aug", income: 6300, expense: 4700 }, // Profit
  { month: "Sep", income: 5800, expense: 4300 }, // Profit
  { month: "Oct", income: 6200, expense: 4900 }, // Profit
  { month: "Nov", income: 6500, expense: 5200 }, // Profit
  { month: "Dec", income: 5000, expense: 5300 }, // Loss (Holiday season)
];

const Chart = () => {
  return (
    <div className="bg-[#1A1C22] rounded-lg p-4 w-full h-[415px] xl:w-2/3 flex flex-col">
      <div className="flex px-4 justify-between items-center">
        <h1 className="text-white text-2xl font-semibold mb-4">Overview</h1>

        {/* Legends and options */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-[#3dfc03] rounded-full mr-2"></span>
              <span className="text-white">Income</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-[#fce803] rounded-full mr-2"></span>
              <span className="text-white">Expense</span>
            </div>
          </div>

          <ChartSelector/>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
          {/* Removed vertical grid lines */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip />
          {/* Income line (green) */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#3dfc03"
            strokeWidth={3}
          />
          {/* Expense line (yellow) */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#fce803"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

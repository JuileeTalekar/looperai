require("dotenv").config();

const { TransactionsModel } = require("./Models/TransactionsModel");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const authRoute = require("./Routes/AuthRoute");
const app = express();

const Port = process.env.PORT || 3001;
const url = process.env.MONGO_URL;

app.use(
  cors({
    origin: ["https://looperai.vercel.app"], // Add all frontend URLs explicitly
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

app.use("/", authRoute);

app.get("/", async (req, res) => {
  res.send("Welcome to the LooperAI Backend!");
});

app.get("/getTransactionsByUserId/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const transactions = await TransactionsModel.find({ user_id: userId });
    res.status(200).json({
      message: "Transactions fetched successfully.",
      transactions: transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();

//middleware for app to work with json data
app.use(express.json());
// To communicate with react server
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;
// connect to mongo db
connectDB();

// To test server
// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

// API routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

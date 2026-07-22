const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const checkoutRoutes = require("./routes/checkout.routes");
const orderRoutes = require("./routes/order.routes");
const uploadRoutes = require("./routes/upload.routes");
const subscribeRoutes = require("./routes/subscribe.routes");
const adminRoutes = require("./routes/admin.routes");
const adminProductRoutes = require("./routes/productadmin.routes");
const adminOrderRoutes = require("./routes/adminorder.routes");

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
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoutes);
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

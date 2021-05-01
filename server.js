const express = require("express");
const cors = require("cors");
const app = express();

// Router path
const authRoute = require("./routes/auth");
const registerRoute = require("./routes/register");

// DB connection
const connectDB = require("./config/db");
connectDB();

// Body parser
app.use(express.json({ extended: false }));

app.use(cors());
// Init Route
app.use("/api/auth", authRoute);
app.use("/api/register", registerRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

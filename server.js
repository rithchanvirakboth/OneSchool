const express = require("express");
const app = express();

// DB connection
const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

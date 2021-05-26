const express = require("express");
const cors = require("cors");
const app = express();

const multer = require("multer");
const upload = multer();

// Router path
const authRoute = require("./routes/auth");
const registerRoute = require("./routes/register");
const postRoute = require("./routes/post");
const profileRoute = require("./routes/profile");

// DB connection
const connectDB = require("./config/db");
connectDB();

// Body parser
app.use(express.urlencoded({ extended: true }));
// Parse application/json
app.use(express.json());
// Parse multipart/form-data
// app.use(upload.array());

app.use(cors());
// Init Route

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/auth", authRoute);
app.use("/api/register", registerRoute);
app.use("/api/post", postRoute);
app.use("/api/profile", profileRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

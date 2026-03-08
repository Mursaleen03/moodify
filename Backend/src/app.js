const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

/*/
Routes
*/
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);


module.exports = app;

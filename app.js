const express = require("express");
const cors = require("cors");

require("./config/db");

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const userRouter = require("./routes/users.route");
app.use("/api/users", userRouter);

const firRouter = require("./routes/firs.route");
app.use("/api/firs", firRouter);

const gdRouter = require("./routes/gds.route");
app.use("/api/gds", gdRouter);

// Home Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

// Route Not Found
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not Found",
    });
});

//Server Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Server Error",
    });
});

module.exports = app;
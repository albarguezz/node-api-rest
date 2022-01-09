
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoute = require("./routes/users");

// settings
const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// CREATES A NEW USER

app.get("/", (req, res) => {
    res.send("Bienvenido a la api");
})

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

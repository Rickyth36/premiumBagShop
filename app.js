const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownersRouter");
const userRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownerRouter);
app.use("/users",userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
    res.send("Working");
})

app.listen(3000);

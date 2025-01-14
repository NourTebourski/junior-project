const express = require("express");
let app = express();
const db = require("./models/index");
const cors = require("cors")
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors({
  origin: "http://127.0.0.1:5500"
}))

const categoryRouter = require("./routs/category.routers")
const productRouter = require("./routs/product.routers")

app.use(express.json());


app.use("/category",categoryRouter)
app.use("/product",productRouter)

let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

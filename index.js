// Dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();
// Routes
const pokemon = require("./routes/pokemon");
const user = require("./routes/user");
// Middlewares
const auth = require("./middlewares/auth");
const notFound = require("./middlewares/notFound");
const index = require("./middlewares/index");
const cors = require("./middlewares/cors");

app.use(cors);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);

app.use(notFound);

app.listen(process.env.port || 3000, () => {
  console.log("Server is running ...");
});

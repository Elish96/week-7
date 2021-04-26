const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;
require("./config/dbConnect");

app.use(cors());
//using json format
app.use(express.json());

// app.use("/auth", require("./router/authRouter"));
// app.use("/users", require("./router/userRouter"));
app.use("/todo", require("./router/todoRouter"));

app.listen(port, () => console.log(`running on http://localhost:${port}`));

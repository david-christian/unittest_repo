const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5002;

const t1 = require("./router.js");
const app = express();

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", t1);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


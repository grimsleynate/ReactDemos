//add our required modules
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".config.env" });
//set constants
const app = express();
const port = process.env.PORT || 5000;
const dbo = require("./db/conn");
//set Express middleware
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

app.listen(port, () => {
    //perform a database connection when the server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});
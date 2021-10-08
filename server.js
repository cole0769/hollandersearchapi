// 'use strict';
const express = require("express");
const config = require("./config");
const eventRoutes = require('../hollandersearchapi/routes/eventRoutes');
const cors = require("cors")

// const cust_account_model = require('./models/cust_account_model');


const app = express();

const allowedOrigins = ['http://localhost:5000', 'http://172.16.10.230:5000','http://localhost:3000','http://localhost:3003', 'http://172.16.10.230:3003'];
//console.log(allowedOrigins);
var corsOptions = {
  origin: allowedOrigins
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// route 1
app.use('/hollanderapi', eventRoutes.routes)


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hollander Search API is running." });
});

// set port, listen for requestsnpm install
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}.`);
});

// Based on....
// https://www.youtube.com/watch?v=1y9ClWEOIk8&t=842s as example for the SQL
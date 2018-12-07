//Dependencies
const express = require("express");
const path = require("path");
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require("./app/routing/apiRoutes");

//Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '/app/public')));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use('/', htmlRoutes);
app.use("/api", apiRoutes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
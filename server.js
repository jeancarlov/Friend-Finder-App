
// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; // heorku will put this in an available code. you need this line of code. g

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  -- middleware -- to use static assets like js and css
app.use(express.static('public'));  // this is to show that our static is on the public folder

//  Routes for server to respond users vist and request data from different URLs.

var htmlRoutes = require("./routes/htmlRoutes")(app);
var apiRoutes = require("./routes/apiRoutes")(app);



  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
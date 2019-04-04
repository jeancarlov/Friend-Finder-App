
// Dependencies
// =============================================================
var express = require("express");
var path = require("path"); 


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; // heorku will put this in an available code. you need this line of code. g

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  -- middleware -- to use static assets like js and css
app.use('/static', express.static(path.join(__dirname, 'public'))) // this is to show that our static is on the public folder

//  Routes for server to respond users vist and request data from different URLs.


require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// app/routes/apiRoutes.js



  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
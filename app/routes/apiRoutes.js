// extract our routing into routes that are grabing json data

// server side


// This way may now work because of express but i need to check 04/02/19
// import tables from "../data/tableData.js";
var friends = require("../data/friends.js");

module.exports = function(app) {
 // API GET Requests to display a JSON of all possible friends
 //  Code when user visit the
 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });



  // API POST  Requests
  // This wil handle the incoming survey results. In addition, it will handle the compatibility logic for the app.
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    //push into the data array
    res.json(friends);
  });
}

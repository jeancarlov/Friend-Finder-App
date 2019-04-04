
  // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

    $("#submit").on("click", function (event) {
      
        event.preventDefault();
  
        // Here we grab the form elements
        var newSummitResult = {
          customerName : $("#name").val().trim(),
          customerPhoto : $("#photo").val().trim(),
          q1: $("#q1").val().trim(),
          customer1: $("#q2").val().trim(),
          customerName: $("#q3").val().trim(),
          customerName: $("#q4").val().trim(),
          customerName: $("#q5").val().trim(),
          customerName: $("#q6").val().trim(),
          customerName: $("#q7").val().trim(),
          customerName: $("#q8").val().trim(),
          customerName: $("#q9").val().trim(),
          customerName: $("#q10").val().trim(),
  
        };
  
        console.log(newSummitResult);
  
        // This line is the magic. It"s very similar to the standard ajax function we used.
        // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
        // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
        // depending on if a tables is available or not.
  
        $.post("/api/friends", newSummitResult,
          function (data) {
  
            // If a table is available... tell user they are booked.
            if (data) {
              alert("you did it !");
            }
  
            // If a table is available... tell user they on the waiting list.
            else {
              alert("Sorry please completed the survey");
            }
  
            // Clear the form when submitting
            $("#q1").val().trim(),
              $("#q2").val().trim(),
              $("#q3").val().trim(),
              $("#q4").val().trim(),
              $("#q5").val().trim(),
              $("#q6").val().trim(),
              $("#q7").val().trim(),
              $("#q8").val().trim(),
              $("#q9").val().trim(),
              $("#q10").val().trim()
  
          });
  
      });
  //Link to the cientside
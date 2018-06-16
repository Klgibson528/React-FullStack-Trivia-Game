const express = require("express");
const axios = require("axios");
const cors = require("cors");

var app = express();

app.use(cors());
app.use(express.static("build"));

app.get("/api/get-questions", function(req, res, next) {
  // use axios to make api call
  axios
    .get("https://opentdb.com/api.php?amount=10")
    .then(function(response) {
      console.log(response.data); // Print the google web page.
      res.json({ questions: response.data.results });
    })
    .catch(next);
});

app.listen(9090, function() {
  console.log("Listening on port 9090");
});

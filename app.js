const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//cors is inserted to allow the two servers(front-end and back-end) to run together, may want to add extra security for deployment
//adds header to let any url access your API
//to make more specific, add react app url instead of star to say only that url can use API
app.use(cors());
app.use(express.static("build"));

app.get("/api/get-questions", function(req, res, next) {
  // use axios to make api call
  axios
    .get("https://opentdb.com/api.php?amount=10&difficulty=easy")
    .then(function(response) {
      //.data is built into axios which returns JSON from API call
      //.json is used because we are sending out JSON
      //response.data.results is taking the response from the API call, calling the data method to get the data, and then targeting the results section of the JSON
      res.json({ questions: response.data.results });
    })
    .catch(next);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname, +"/build/index.html");
});

const port = process.env.PORT || 9080;
app.listen(port);
console.log(`listening on ${port}`);

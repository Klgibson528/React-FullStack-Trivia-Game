import React, { Component } from "react";
import "./App.css";
//make calls to API
import axios from "axios";
import shuffle from "shuffle-array";

class App extends Component {
  constructor(props) {
    super(props);
    //setting initial state
    this.state = { questions: [], answers: [] };
    //basically binding to this class so you can use it later
    this.get_questions();
  }
  //we keep this method in the class becuase it deals with state
  get_questions(event) {
    //calling api we created on back-end
    //eventually need call on back end for multiple players
    axios
      .get("http://localhost:8080/api/get-questions")
      .then(response => {
        var answers = [];

        //setting state with new set of questions

        //'questions' is the key, 'response.data.questions is the value
        //this.state is now all the data in questions
        response.data.questions.forEach(function(q) {
          var ans = [...q.incorrect_answers];
          ans.push(q.correct_answer);
          shuffle(ans);
          console.log(ans);
          answers.push(ans);
        });
        this.setState({ questions: response.data.questions, answers: answers });
      })

      .catch(error => {});
  }

  display_answers(index) {
    console.log(index, this.state.answers[index]);
    return (
      <div>
        {this.state.answers[index].map((a, index) => {
          return <button dangerouslySetInnerHTML={{ __html: a }} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>The Best Trivia Game</h1>
        {/* when using an on- event the below format is recommended */}
        {/* on click event the get_questions function will run and return a new set of questions */}
        <button onClick={e => this.get_questions(e)}>Get questions</button>
        <ol>
          {/* using map to loop through the questions in the list and return an li */}
          {/* this.state.questions is defined above in setState */}
          {this.state.questions.map((q, index) => {
            {
              /* way to stop react from automatically escaping special characters */
            }
            return (
              <div>
                <p dangerouslySetInnerHTML={{ __html: q.category }} />
                <li dangerouslySetInnerHTML={{ __html: q.question }} />
                {this.display_answers(index)}
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;

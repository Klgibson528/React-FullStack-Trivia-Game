import React, { Component } from "react";
import "./App.css";
//make calls to API
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    //setting initial state
    this.state = { questions: [] };
    //basically binding to this class so you can use it later
    this.get_questions();
  }
  //we keep this method in the class becuase it deals with state
  get_questions(event) {
    //calling api we created on back-end
    axios
      .get("http://localhost:9090/api/get-questions")
      .then(response => {
        console.log(response.data);
        //setting state with new set of questions
        this.setState({ questions: response.data.questions });
        //'questions' is the key, 'response.data.questions is the value
        //this.state is now all the data in questions
      })
      .catch(error => {});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello2</h1>
        {/* when using an on- event the below format is recommended */}
        {/* on click event the get_questions function will run and return a new set of questions */}
        <button onClick={e => this.get_questions(e)}>Get questions</button>
        <ul>
          {/* using map to loop through the questions in the list and return an li */}
          {/* this.state.questions is defined above in setState */}
          {this.state.questions.map(q => {
            {
              /* way to stop react from automatically escaping special characters */
            }
            return <li dangerouslySetInnerHTML={{ __html: q.question }} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

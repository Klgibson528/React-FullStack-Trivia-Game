import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };
    this.get_questions();
  }

  get_questions(event) {
    axios
      .get("http://localhost:9090/api/get-questions")
      .then(response => {
        console.log(response.data);
        this.setState({ questions: response.data.questions });
      })
      .catch(error => {});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello2</h1>
        <button onClick={e => this.get_questions(e)}>Get questions</button>
        <ul>
          {this.state.questions.map(q => {
            return <li>{q.question}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

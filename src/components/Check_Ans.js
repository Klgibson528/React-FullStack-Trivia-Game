import React, { Component } from "react";

// if correct, return 'Correct!'
// add one point to correct-counter and total-counter
//if wrong, return 'Incorrect!'
function Check_Ans(props) {
  if (props.status === "correct") {
    return (
      <div>
        <h6>Correct!</h6>
      </div>
    );
  } else if (props.status === 'incorrect') {
    return (
      <div>
        <h6>Incorrect!</h6>
      </div>
    );
  }

  return <div/>;
}

export default Check_Ans;

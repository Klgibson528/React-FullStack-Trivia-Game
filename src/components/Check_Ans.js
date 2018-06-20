import React, { Component } from "react";

// if correct, return 'Correct!'
// add one point to correct-counter and total-counter
//if wrong, return 'Incorrect!'
function Check_Ans(props){
    if( === q.correct_answer) {
        count += 1
        return <div><h6>Correct!</h6></div>
    }
    else {
        return <div><h6>Incorrect!</h6></div>
    }
}
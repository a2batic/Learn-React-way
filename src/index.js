import React, { Component } from 'react';
import {render} from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

// class SkiDayCounter extends Component {
//     render() {
//         return (
//            ...
//         )
//     }
// }

// ES6 classes are not the only way to create a React components
// You can also create a component as a Function (Note: Classes are
// a special type of Function in Javascript)
// How?
// Using JS Syntax, we can create a JS function that returns JSX elements
// to be rendered

// How to access props now? Pass props object to be consumed by component

// Custom functions:
// Preferred creating outside to avoid function inside a function
const getPercent = decimal => {
    return decimal * 100 + '%';
}

const calGoalProgress = (total,goal) => {
    return getPercent(total/goal);
}

//const SkiDayCounter = (props) => {
  // Destructuring the properties
const SkiDayCounter = ({total, powder,backcountry,goal}) => {
  return (
      <section>
        <div>
          {/** <p>Total Days: {props.total}</p>*/}
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {calGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
}

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}/>,
    document.getElementById('root')
)

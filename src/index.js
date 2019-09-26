import React, { Component } from 'react'; // Destructuring of Component
// React is important for any file using JSX, so importing react cant be
// avoided even through its not used directly.
import {render} from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkiDayCounter extends Component { //Hence removed React from here
    render() {
      // Destructuring props - shorting the syntax
      const {total, powder, backcountry, goal} = this.props;
        return (
            <section>
              <div>
                <p>Total Days: {total}</p>
              </div>
              <div>
                <p>Powder Days: {powder}</p>
              </div>
              <div>
                <p>Backcountry Days: {backcountry}</p>
              </div>
              <div>
                <p>Goal Days: {goal}</p>
              </div>
            </section>
        )
    }
}


render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}/>,
    document.getElementById('root')
)

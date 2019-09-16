import React from 'react'; //
import ReactDOM from 'react-dom';//render method to add html to DOM

//React became famous due to its component based structure
//We create a user interface simply by creating a nesting a collection of component

//component
//Use ES6 'class'
class Message extends React.Component {
    //All React components has render method
    //render() = what we wnat to render to the DOM
    render(){
        return (
            //adding elements
            <div>
                <h1>Hello Everyone</h1>
            </div>
        )
    }
}

//rendering above `Message` component to the DOM
ReactDOM.render(<Message />, document.getElementById('root'), //where do you want to render (element already present in public/index.html)
)

// Note: All the component are capitalised else you will get following error
// Warning: The tag <message> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
// This is a change that has been introduced in recent version of React
//Why? There needs to be a way to distinguish between just regular JSX element like div h1 and our components
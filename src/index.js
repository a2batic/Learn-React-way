import React from 'react'; //
import ReactDOM from 'react-dom';//render method to add html to DOM

var style = {
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Arial'
}

// const title = React.createElement(
//     'h1', //type of element
//     {id: 'title', className: 'header' ,style: style}, //attributes
//     'Hello world' // children
// )

// const listItem = React.createElement(
//     'ul', //type of element
//     {id: 'title', className: 'header' ,style: style}, //attributes
//     React.createElement(
//         'li',
//         {},
//         'items on the list'
//     )
// )

//Its hard to render each element like above
//Lets simplify this
//React provides us with a different syntax called JSX - Javascript as XML 
//tag based syntax to skip on create react element calls and used this much cleaner tag based syntax

ReactDOM.render(
    <div style={style}>
        {/* JSX curly braces to give style */}
        <h1 id="heading-elem">Hello World</h1>
        <p>Glad you are here</p>
    </div>,
    document.getElementById('root'), //where do you want to render (element already present in public/index.html)
)


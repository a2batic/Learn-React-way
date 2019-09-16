import React from 'react'; //
import ReactDOM from 'react-dom';//render method to add html to DOM

var style = {
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'h1', //type of element
    {id: 'title', className: 'header' ,style: style}, //attributes
    'Hello orld' // children
)

ReactDOM.render(
    title, //what we want to render
    document.getElementById('root'), //where do you want to render (element already present in public/index.html)
)
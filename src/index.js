import React from 'react'; 
import ReactDOM from 'react-dom';

//React became famous due to its component based structure
//We create a user interface simply by creating a nesting a collection of component

//component
//Use ES6 'class'
class Message extends React.Component {
    //to make a component elements or data dynamic we use React Props
    //using props we can pass data to component
    render(){
        console.log(this.props)
        return (
            <div>
                <h1 style={{color: this.props.color}}>{/**Since style take an object hence {{}} */}
                    {this.props.msg}
                </h1>
                {/* Here {} is again a JSX expression.
                We can access the properties via the this.props object
                followed by the key or attribute name */}
                <p>minutes:{this.props.time} min</p>
                <p>Code is working? {this.props.work ? 'Yes' : 'No'}</p>
            </div>
        )
    }
}


ReactDOM.render(
    <Message time={50} color="blue" msg="how are you?" work={true}/>, 
    //here msg is a prop "string" {not a string, number, boolean etc} <= JSX
    //Boolean cant be printed as such like strings and number, they just can be used
    document.getElementById('root')
)

// Props object can contain as many properties as you like

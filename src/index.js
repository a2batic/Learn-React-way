import React, { Component } from 'react';
import {render} from 'react-dom';

// Mutliple components

const Library = () => { // Parents Component
  return (
    <div>
      <Book title='abc' author='abc' pages={2}/> // Child Component
      <Book title='def' author='def' pages={3}/>
      <Book title='rty' author='ert' pages={6}/>
    </div>
  )
}

const Book = ({title, author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}

render(
    //What to do if we want 2 components
    //------try 1
    // <Library/>
    // <Book title='abc' author='abc' pages={2}/>,
    //------error : Parsing error: Adjacent JSX elements must
    //be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    //-----try 2 (wrapping under div)
    // <div>
    //   <Library/>
    //   <Book title='abc' author='abc' pages={2}/>
    // </div>,
    // Worked
    //---- try3 (creating another component)
    <Library />,
    // Worked
    document.getElementById('root')
)

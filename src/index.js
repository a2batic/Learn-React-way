import React, { Component } from 'react';
import {render} from 'react-dom';

// For multiple data
let bookList = [
  {'title': 'abc', 'author': 'abc', 'pages': 2},
  {'title': 'def', 'author': 'vfd', 'pages': 3},
  {'title': 'dff', 'author': 'saa', 'pages': 6}
]

const Library = ({books}) => {
  return (
    <div>
      {/**{ books.map(book =>
        <Book title={book.title}
              author={book.author}
              pages={book.pages}/>
            )}
      Worked BUT: console has a
      WARNING: Each child in a list should have a unique "key" prop.
      We need to add a key to each dynamically rendered child,
      so this serves as a unique identifier, which will help track
      which of these COMPONENT are updating and rendering with react
*/}
      { books.map((book,i) =>
        <Book key={i}
              title={book.title}
              author={book.author}
              pages={book.pages}/>
            )}
      {/**All our components has a unique Key which will help us
      rendering and now React UI are a reflection of data -
      Check Chrome React console*/ }

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
    <Library books={bookList}/>, // making bookList accessible within
    // our component Library and then in the book
    document.getElementById('root')
)

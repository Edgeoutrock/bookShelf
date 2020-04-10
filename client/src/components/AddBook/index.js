import React from "react";
import CardBtn from "../CardBtn";
import axios from "axios";

import { toast } from 'react-toastify';

class AddBook extends React.Component{
 
    postBook = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        // just puts the nice message for the user that he or she has saved a book to bookshelf
        .then( () => toast.success(`You added ${book.title} to your bookshelf`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <CardBtn type="primary" onClick={() => 
            {this.postBook(this.props)}
            }>
            Save Book
        </CardBtn>
        </div>
        );
    }
  }

  export default AddBook;
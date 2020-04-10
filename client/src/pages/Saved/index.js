import React, { Component } from 'react';
import Row from "../../components/Row";
import Col from "../../components/Col";
import { BookShelf, BookListItem } from "../../components/BookShelf";
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import RemoveBook from '../../components/RemoveBook';
import { toast } from 'react-toastify';


class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
      .then( () => {
        // a pop up to notify the user of an error
        toast.error('Book Deleted');
        this.getBooks();
        
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <BookShelf>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                      <RemoveBook
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </BookShelf>
              :
              <EmptyList />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;
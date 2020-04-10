import React from "react";
import Thumbnail from "../Thumbnail";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
//import "./style.css";


// BookList renders a bootstrap list item
export function BookShelf({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export class BookListItem extends React.Component{

    render(){
     console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
          <div className="card">
            <Col size="xs-4 sm-2">
           
              <Thumbnail src={this.props.thumbnail} />
              
            </Col>
            
            <Col size="xs-8 sm-9">
            
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              
              <div className="content">
              <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a>

              </div>

            </Col>
            </div>
          </Row>
        </Container>
      </li>
    );
    }
  }
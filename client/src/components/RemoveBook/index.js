import React from "react";
import CardBtn from "../CardBtn";


function RemoveBook(props) {
    return (
      <CardBtn type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Delete
      </CardBtn>
    );
  }



  export default RemoveBook;
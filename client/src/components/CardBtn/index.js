import React from "react";


function CardBtn({children, onClick}) {
  
  return (
    <div>
       <button onClick={onClick} className={"btn btn-lg btn-default"}>
      {children}
    </button>
    </div>
  );
}

export default CardBtn;

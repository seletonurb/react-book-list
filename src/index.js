import React from "react";
import ReactDOM from "react-dom";

import BookList from "./containers/book-list";

// Create a new component. This component should produce some HTML
const App = function() {
  return (
    <div>
      <BookList />
    </div>
  );
};
// Take this component's generated HTML and put it n the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

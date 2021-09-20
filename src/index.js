import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//setup vars
const author = "Osamu Dazai";
const title = "No Longer Human";
const img = "https://images-na.ssl-images-amazon.com/images/I/51Sjypj1F7L._AC_UL200_SR200,200_.jpg"

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

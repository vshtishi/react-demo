import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51Sjypj1F7L._AC_UL200_SR200,200_.jpg",
    title: "No Longer Human",
    author: "Osamu Dazai",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81WUAoL-wFL._AC_UL200_SR200,200_.jpg",
    title: "Lord of the Flies",
    author: "William Golding",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51cTFYeOAXS._AC_UL200_SR200,200_.jpg",
    title: "The Handmaid's tale",
    author: "Margaret Atwood",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71FTb9X6wsL._AC_UL160_SR160,160_.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71j3JB9HHsL._AC_UL160_SR160,160_.jpg",
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81-tbD97VRL._AC_UL160_SR160,160_.jpg",
    title: "The Crucible",
    author: "Arthur Miller",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

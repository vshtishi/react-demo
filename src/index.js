import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
import { books } from "./books";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("test");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          alert(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Test
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Test2
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

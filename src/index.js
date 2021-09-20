import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

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
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51Sjypj1F7L._AC_UL200_SR200,200_.jpg" />
  );
};

const Title = () => {
  return <h1>No Longer Human</h1>;
};

const Author = () => {
  return <h4>Osamu Dazai</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));

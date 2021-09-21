import React from 'react'

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
  }

export default Book

import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import books from "../books/history.json";

function AllTheBooks() {
  console.log(books);
  return (
    <div>
      <CardColumns>
      {books.map((book) => {
        return (

          <Card key={book.asin} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} />
          </Card>
        );
      })}
      </CardColumns>
    </div>

  );
}

export default AllTheBooks;

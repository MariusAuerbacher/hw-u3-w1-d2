import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap';


function Welcome(props) {
  return (
    <Jumbotron className="text-center">
    <h1>Bookstore</h1>
    <h2>{props.msg}</h2>
    <p>
      My first React Bookstore
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  )
}

export default Welcome
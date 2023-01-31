import React from "react";
import { Card } from "react-bootstrap";
import Message from "./Message";


function Footer(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </Card.Body>
      </Card>
      <Message msg={props.msg}/>
    </>
  );
}

export default Footer;

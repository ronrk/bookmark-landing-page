import React from "react";
import Button from "../UI/Button";
import Wrapper from "./Contact.styled";

const Contact = () => {
  return (
    <Wrapper className="text-center">
      <span>35,000+ already joined</span>
      <h2>Stay up-to-date with what we’re doing</h2>
      <input type="text" />
      <Button>Contact Us</Button>
    </Wrapper>
  );
};

export default Contact;

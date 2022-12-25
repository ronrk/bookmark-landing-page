import React from "react";
import Button from "../UI/Button";
import Wrapper from "./FAQ.styled";

const FAQ = () => {
  return (
    <Wrapper className="text-center">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Button>More Info</Button>
    </Wrapper>
  );
};

export default FAQ;

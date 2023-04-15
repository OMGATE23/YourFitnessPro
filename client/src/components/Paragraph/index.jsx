import React from "react";

const Paragraph = ({ text }) => {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

  return (
    <div>
      {sentences.map((sentence, index) => (
        <p key={index}>{sentence.trim()}</p>
      ))}
    </div>
  );
};

export default Paragraph;

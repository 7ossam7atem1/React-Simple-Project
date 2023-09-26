import React from "react";

const articleContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const articleTitleStyle = {
  fontSize: "24px",
  color: "#333",
};

const articleContentStyle = {
  fontSize: "18px",
};

function Article() {
  return (
    <div style={articleContainerStyle}>
      <h3 style={articleTitleStyle}>Articles</h3>
      <p style={articleContentStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        ullamcorper justo. Donec vehicula urna ac ullamcorper.
      </p>
    </div>
  );
}

export default Article;

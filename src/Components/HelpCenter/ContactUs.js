import React from "react";

const contactUsContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const contactUsTitleStyle = {
  fontSize: "24px",
  color: "#333",
};

const formStyle = {
  maxWidth: "400px",
  margin: "0 auto",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

function ContactUs() {
  return (
    <div style={contactUsContainerStyle}>
      <h3 style={contactUsTitleStyle}>Contact Us</h3>
      <form style={formStyle}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input type="text" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email:</label>
          <input type="email" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Message:</label>
          <textarea style={textareaStyle}></textarea>
        </div>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;

import React, { useState, useEffect } from 'react';

const quoteContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Set to your desired height for centering
};

const quoteCardStyle = {
  backgroundColor: '#f3f3f3',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '18px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.text);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  return (
    <div style={quoteContainerStyle}>
      <h1>Random Quote Generator</h1>
      <div style={quoteCardStyle}>
        <p>{quote}</p>
        <button style={buttonStyle} onClick={() => window.location.reload()}>
          Generate New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGenerator;

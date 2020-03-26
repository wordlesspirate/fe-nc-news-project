import React from "react";

const ErrorHandler = ({ status, errorMessage }) => {
  return (
    <main>
      <p>Error: {status}</p>
      <p>{errorMessage}</p>
    </main>
  );
};

export default ErrorHandler;

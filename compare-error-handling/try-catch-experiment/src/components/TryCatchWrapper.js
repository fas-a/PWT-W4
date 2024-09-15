// src/components/TryCatchWrapper.js
import React, { useState } from 'react';
import ErrorProneComponent from './ErrorProneComponent';

const TryCatchWrapper = () => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.error('Kesalahan ditangkap oleh try-catch:', err);
    setError(err);
  };

  return (
    <div>
      {error ? (
        <div>Terjadi kesalahan: {error.message}</div>
      ) : (
        <ErrorProneComponent onError={handleError} />
      )}
    </div>
  );
};

export default TryCatchWrapper;

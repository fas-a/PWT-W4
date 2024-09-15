// src/components/ErrorProneComponent.js
import React from 'react';

const ErrorProneComponent = () => {
  // Simulasi kesalahan saat rendering
  throw new Error('Kesalahan terjadi di ErrorProneComponent!');

  return <div>Komponen ini tidak akan ditampilkan.</div>;
};

export default ErrorProneComponent;

// src/components/ErrorProneComponent.js
import React from 'react';

const ErrorProneComponent = ({ onError }) => {
  const handleClick = () => {
    try {
      // Simulasi kesalahan saat tombol diklik
      throw new Error('Kesalahan terjadi di ErrorProneComponent!');
    } catch (error) {
      onError(error); // Kirim kesalahan ke komponen induk
    }
  };

  return (
    <div>
      <p>Komponen ini berisiko mengalami kesalahan. Klik tombol untuk mencoba.</p>
      <button onClick={handleClick}>Klik Saya</button>
    </div>
  );
};

export default ErrorProneComponent;

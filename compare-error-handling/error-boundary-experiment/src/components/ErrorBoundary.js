// src/components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Kesalahan ditangkap oleh ErrorBoundary:', error);
    console.error('Informasi kesalahan:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Terjadi kesalahan di aplikasi ini.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

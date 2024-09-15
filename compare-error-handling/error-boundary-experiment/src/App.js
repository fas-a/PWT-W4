// src/App.js
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorProneComponent from './components/ErrorProneComponent';

function App() {
  return (
    <div>
      <h1>Eksperimen Error Boundaries</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;

import { getByPlaceholderText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting() {
  return <div>
    <h1>Esto es un componente</h1>
    <p>lorem 123</p>
  </div>
}

root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
)
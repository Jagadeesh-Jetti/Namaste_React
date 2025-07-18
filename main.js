import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { key: 'iron' }, 'I am Ironman'),
    React.createElement('h1', { key: 'spidey' }, 'I am Spidey'),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

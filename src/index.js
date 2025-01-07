import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SumFunc from './SumFunc';
import SumClass from './SumClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SumFunc />
    //<SumClass />
);

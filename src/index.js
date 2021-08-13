import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('G-5BVX10WN2K');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

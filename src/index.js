import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './components/form/Form.css';
import './components/card/Card.css';
import './styles/Layout.css';
import "./i18n";


const root = createRoot(document.getElementById('root'));
root.render(<App />);
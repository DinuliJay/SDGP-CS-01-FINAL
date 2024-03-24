import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { JobRoleProvider } from './Components/JobRoleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    
      <JobRoleProvider>
        <App />
      </JobRoleProvider>
      
    </BrowserRouter>
    
  </>,
  
);

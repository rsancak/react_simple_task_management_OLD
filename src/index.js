import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/scss/bootstrap.scss';
import App from './App';
import './index.css'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App toast={toast} />
    <ToastContainer position="bottom-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss={false}
      theme="colored"
      transition={Slide}
    />
  </>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import store from "./Redux/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
const razorpayScript = document.createElement('script');
razorpayScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
razorpayScript.async = true;
document.head.appendChild(razorpayScript);
razorpayScript.onload = () => {
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
}

razorpayScript.onerror = (error) => {
  console.error('Error loading Razorpay script:', error);

};
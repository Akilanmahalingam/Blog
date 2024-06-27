// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import TagManager from 'react-gtm-module';
// import './index.css';

// const tagManagerArgs = {
//   gtmId: 'GTM-TSN2T7SL' // Replace with your GTM container ID
// };

// TagManager.initialize(tagManagerArgs);




// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure this import
import App from './App';
import TagManager from 'react-gtm-module';
import './index.css';

const tagManagerArgs = {
  gtmId: 'GTM-TSN2T7SL' // Replace with your GTM container ID
};

TagManager.initialize(tagManagerArgs);


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



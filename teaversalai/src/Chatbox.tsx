import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chatbox() {
  return (
    <div className="App">
        <p>
        How can I help you determine the best hotel option 
            in your area?
        </p>
        <button className="btn btn-primary">Price</button>
        <button className="btn btn-primary">Feedback</button>
        <button className="btn btn-primary">Distance</button>

        <input type="text" placeholder="Message Traversal AI ... " /> 
    
    </div>
  );
}

export default Chatbox;

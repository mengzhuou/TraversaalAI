import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withFuncProps } from "./withFuncProps";

class Chatbox extends React.Component<any,any> {
  constructor(props:any){
    super(props);
  }

  introNav = () => {
      this.props.navigate("/")
  }
  render() {
    return (
      <div className="App">
        <div className='row'>
            <button className="btn btn-primary" onClick={this.introNav}>Main Page</button>
        </div>
        <p>
          How can I help you determine the best hotel option in your area?
        </p>
        <button className="btn btn-primary">Price</button>
        <button className="btn btn-primary">Feedback</button>
        <button className="btn btn-primary">Distance</button>

        <input type="text" placeholder="Message Traversal AI ... " />
      </div>
    );
  }
}

export default withFuncProps(Chatbox);

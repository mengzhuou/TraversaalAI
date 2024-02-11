import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-removebg-preview.png';
import { withFuncProps } from "./withFuncProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need

class Chatbox extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      prompt:"",
      response:"",
    }
  }

  localNav = () => {
    this.props.navigate("/")
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
  }

  render() {
    const { prompt, response } = this.state;
    return (
      <div className="App">
        <div className='container'>
          <h1 className="title">Hotel Recommender</h1>
          <img className="logo_img" src={logo} alt="Logo" />
          <p className='midLineChatbox'>
            How can I help you determine the best hotel option in your area?
          </p>
          <div className='filterLine'>
            <div className='filterCol'>
              <button className="btnChatboxStyle">Price</button>
            </div>
            <div className='filterCol'>
              <button className="btnChatboxStyle">Feedback</button>
            </div>
            <div className='filterCol'>
              <button className="btnChatboxStyle">Distance</button>
            </div>
          </div>
          <div className="inputSection">
            <input className="inputBar" type="text" placeholder="Message Traversal AI ... " />
            <button type="submit" className="submitBtn"> 
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        <footer>
            <div className="footer-text">
                Empower Your Journey @
            </div>
            <div className="footer-find-me">
                <a onClick={this.localNav}>Hotel Recommender</a>
            </div>
        </footer>
      </div>
    );
  }
}

export default withFuncProps(Chatbox);

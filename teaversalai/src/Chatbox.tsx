import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-removebg-preview.png';
import { withFuncProps } from "./withFuncProps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you need
import axios from 'axios';

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

  handleInputChange = (event: { target: { value: any; }; }) => {
    this.setState({ prompt: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
  }

  handleAISubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/generate', { prompt: this.state.prompt });
      const response = res.data.response;
      window.alert(res.data.response);
      this.setState({ response: res.data.response });
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <input
              className="inputBar"
              type="text"
              placeholder="Message Traversal AI ..."
              value={prompt}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="submitBtn" onClick={this.handleAISubmit}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          {response && <p>{response}</p>}
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

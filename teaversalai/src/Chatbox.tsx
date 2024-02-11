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
      prompt: "",
      response: "",
      isResponse: false,
    }
  }

  localNav = () => {
    this.props.navigate("/")
  }

  handleInputChange = (event: { target: { value: any; }; }) => {
    this.setState({ prompt: event.target.value });
  };

  handleAISubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/generate', { prompt: this.state.prompt });
      const response = res.data.response;
      this.setState({ response: response, isResponse: true });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  handlePriceSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/generate', { prompt: "Give me nice breakfast hotels in San francisco with fair prices." });
      const response = res.data.response;
      this.setState({ response: response, isResponse: true });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  handleDistanceSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/generate', { prompt: "Give me nice breakfast hotels in Georgia with nearest distance in 10 miles." });
      const response = res.data.response;
      this.setState({ response: response, isResponse: true });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  handleFeedbackSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/generate', { prompt: "Give me nice breakfast hotels in Georgia with good review." });
      const response = res.data.response;
      this.setState({ response: response, isResponse: true });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    const { prompt, response, isResponse } = this.state;
    let formattedResponse;
    if (isResponse) {
      formattedResponse = response.split(/\d\./).filter(Boolean).map((item: any, index: any) => (
        <div key={index}>
          <p>{"->"}{item.trim()}</p>
          <br />
        </div>
      ));
    }
    return (
      <div className="App">
        <div className='container'>
          <h1 className="title">Hotel Recommender</h1>
          <img className="logo_img" src={logo} alt="Logo" />
          <br />
          {isResponse ? (
            <div className="responseContainer">
              <p>{formattedResponse}</p>
            </div>
          ) : (
            <p className='midLineChatbox'>
              How can I help you determine the best hotel option in your area?
            </p>
          )}

          <div className='filterLine'>
            <div className='filterCol'>
              <button className="btnChatboxStyle" onClick={this.handlePriceSubmit}>Price</button>
            </div>
            <div className='filterCol'>
              <button className="btnChatboxStyle" onClick={this.handleFeedbackSubmit}>Feedback</button>
            </div>
            <div className='filterCol'>
              <button className="btnChatboxStyle" onClick={this.handleDistanceSubmit}>Distance</button>
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
            <button type="submit" className="submitBtn" onClick={this.handleAISubmit} disabled={!prompt}>
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

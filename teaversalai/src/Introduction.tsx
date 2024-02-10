import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-removebg-preview.png';
import hotelLogo from './hotel_logo.png';
import { withFuncProps } from "./withFuncProps";

class Introduction extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    chatBoxNav = () => {
        this.props.navigate("/Chatbox")
    }

    localNav = () => {
        window.location.reload(); // Reload the page
        window.scrollTo(0, 0); 
    }
    render() {
        return (
        <div className="App">
            <div className="container">
            <h1 className="title">Hotel Recommender</h1>
            <img className="logo_img" src={logo} alt="Logo" />
            <div className='row'>
                <div className='col'>
                <div className='topLine'>
                    <div className='topLineText'>Personalized</div>
                    <div className='topLineText'> | </div>
                    <div className='topLineText'>24/7</div>
                    <div className='topLineText'> | </div>
                    <div className='topLineText'>Self-paced</div>
                </div>
                    <p className='topText'>Experience hassle-free travel planning with <span className='recommenderName'>Hotel Recommender</span></p>
                    <p className='midLine'>Simplify your search and make your decision-making process a breeze.</p>
                </div>
                <div className='col-6'>
                <img className="hotel_logo_img" src={hotelLogo} alt="hotel Logo" />
                </div>
                </div>
                <button className="btnStyle" onClick={this.chatBoxNav}>LET'S START</button>
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

export default withFuncProps(Introduction);

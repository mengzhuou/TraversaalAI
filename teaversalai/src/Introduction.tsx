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
    render() {
        return (
        <div className="App">
            <div className="container">
            <h1 className="title">Traversal AI</h1>
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
                <p>Customize Best Hotel For You</p>
                </div>
                <div className='col-6'>
                <img className="hotel_logo_img" src={hotelLogo} alt="hotel Logo" />
                </div>
            </div>
            <div className='row'>
                <button className="btn btn-primary" onClick={this.chatBoxNav}>LET'S START</button>
            </div>
            </div>
        </div>
        );
    }
}

export default withFuncProps(Introduction);

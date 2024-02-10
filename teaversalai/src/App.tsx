import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from './Introduction';
import Chatbox from './Chatbox';


class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);

  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Introduction/>}/>
          <Route path="/Chatbox" element={<Chatbox/>}/>
        </Routes>
      </Router>
    );
  }
}
  
export default App;
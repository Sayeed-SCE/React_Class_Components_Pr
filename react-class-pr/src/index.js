import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/MessageComponent";
import Name from "./components/NameComponents";
import Place from "./components/Location";
import Gender from "./components/Gender";
import Address from './components/Address';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: " ",
      name: "Sayeed",
      place: "California ",
      gender: "Male",
      address: "1st Washington Sq, San Francisco"
    };
  }

  changeHandlerFunction = event => {
    this.setState({message: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
        <Place propsPlace={this.state.place} />
        <Gender propsGender ={this.state.gender} />
        <Address propsAddress = {this.state.address} /> 
        <label>
        <input onChange = {this.changeHandlerFunction} />
        </label>
        
              </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


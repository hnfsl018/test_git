import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input: "",
    result: ""
    
  };

  
  testChange = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  receiveValue = event => {
    event.preventDefault();
    const text = this.state.input;
    this.setState({
      result: text
    });
  };

  delete = event => {
    const del = this.state.result;
    this.setState({
      result: null
    });
  };

  edit = () => {
    
    this.setState({
      input: this.state.result
    });
  };
  

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.receiveValue}>
          <div>
            <input type="text" value={this.state.input} onChange={this.testChange}/>
          </div>
          <div>
            <button>ADD</button>
            
          </div>
        </form>
        <button onClick={this.delete}>delete</button>
        <button onClick={this.edit}>edit</button>
        <p>Text: {this.state.result}</p>
      
      </React.Fragment>
    );
  }
}

export default App;

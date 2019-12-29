import React, { Component } from 'react';
import logo from './Image/skull.png';
import './App.css';
import './form.css';
import Content from './content';
// import MyComponent from './myComponent';
// import Counter from './Counter';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      {/* <MyComponent/> */}
      {/* <Counter */}
        {/* number={'123456'} */}
        {/* a={'235'} */}
      {/* /> */}
      {/* <Footer/> */}

    </div>
  );
}

class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="App-link" href="https://www.facebook.com/">Content</a>


      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className=" App App-header">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Fontsize">WellCome to Cow Farm</h1>
        </header>
      </div>
    );
  }
}

export default App;

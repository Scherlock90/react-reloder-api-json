import React, { Component } from 'react';
import LoaderJSon from './Components/LoaderJson';
import Footer from './Components/Footer';
import LoadJSonPoland from './Components/LoadJSonPoland';

class App extends Component {
  render() {
    const titleStyle = {
      fontSize: '180%',
      padding: '2em',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#424242'
    }
    const container = {
      backgroundColor: '#bdbdbd'
    }
    return (
      <div style={container}>
        <div style={titleStyle}>
            JSON API LOADER <br/> WITH BLACK&WHITE EFFECTS
        </div>
        {/* <LoaderJSon /> */}
        <LoadJSonPoland />
        <Footer />
      </div>
    );
  }
}

export default App;

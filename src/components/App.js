import React from 'react';
import styles from './App.scss';

import ColorInput from './ColorInput';
import { colorsRequest } from './../index';

class App extends React.Component {


  componentDidMount() {
    if (this.props.colors === null) this.props.startFetchingColors();
  }

  render() {
    return (
      <div style={{backgroundColor: 'green'}}>
        <h1>ColorApp</h1>
    
        <ColorInput colors={this.props.colors}/>
        
      </div>
    );
  }
}

export default App;
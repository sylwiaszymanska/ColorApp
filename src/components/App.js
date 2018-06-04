import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

import ColorInput from './ColorInput';

class App extends React.Component {

  componentDidMount() {
    console.log(this.props.colors);
    if (this.props.colors === null) {this.props.startFetchingColors();}
  }

  render() {
    return (
      <div style={{backgroundColor: 'green'}}>
        <h1>ColorApp</h1>
        {this.props.colors && <ColorInput colors={this.props.colors}/>}
        // <button onClick={() => this.props.startFetchingColors() } />
      </div>

    );
  }
}

App.propTypes = {
  colors: PropTypes.array,
  startFetchingColors: PropTypes.func.isRequired,
};

App.defaultProps = {
  colors: null,
};

export default App;

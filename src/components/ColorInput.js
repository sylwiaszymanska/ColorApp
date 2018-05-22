import React from 'react';
import styles from './App.scss';

class ColorInput extends React.Component {

  

  onInput(value) {
    console.log('value', value);
  }
  render() {

    const colors = this.props.colors;

    console.log('COLOR COMPONENT', colors);

    return (
      <div>
        <input onInput={() => this.onInput(this)} list="browsers" name="browser" />
        <datalist id="browsers">
          <option value="Internet Explorer"/>
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
        <button>Accept</button>
      </div>
    );
  }
}

export default ColorInput;
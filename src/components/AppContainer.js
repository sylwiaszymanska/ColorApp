import { connect } from 'react-redux';
import { startFetchingColors } from './actions/AppActions';

import App from './App';
import AppLoginState from './AppLoginState';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  startFetchingColors: () => dispatch(startFetchingColors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
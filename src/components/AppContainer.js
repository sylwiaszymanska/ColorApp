import { connect } from 'react-redux';
import { startFetchingColors } from './../actions/AppActions';
import App from './App';

const mapStateToProps = state =>  ({
  colors: state.colors,
});


const mapDispatchToProps = dispatch => ({
  startFetchingColors: () => dispatch(startFetchingColors()),
});

// const mergeProps = (stateProps, dispatchProps, ownProps) =>
//   Object.assign({}, ownProps, stateProps, dispatchProps, {
//     screenMode: ownProps.match.path,
//   });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

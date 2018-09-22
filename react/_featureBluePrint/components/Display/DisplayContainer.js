import React from 'react';
import {connect} from "react-redux";
import DisplayComponent from "./DisplayComponent";
import actions from "../../store/actions"


const mapStateToProps = (state, ownProps) => {
  return {
    count: state.test.count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
    reset: () => dispatch(actions.reset()),
  };
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);

export default DisplayContainer;
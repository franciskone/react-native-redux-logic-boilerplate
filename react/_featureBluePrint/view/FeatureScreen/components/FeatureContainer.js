import React from 'react';
import {connect} from "react-redux";
import FeatureComponent from "./FeatureComponent";
import actions from "../../../store/actions"


const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(FeatureComponent);

export default DisplayContainer;
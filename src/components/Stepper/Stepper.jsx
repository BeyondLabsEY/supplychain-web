import React, { Component } from "react";
import _ from 'lodash';

import "./Stepper.scss";
import stepsData from "./stepsData";
import Step from "../Step/Step.jsx";

const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";
const STEPS_ENDPOINT = "steps";
const REQUEST_INTERVAL_SECONDS = 5;

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: stepsData,
      firstLoaded: false
    };
  }

  fetchStepsData() {
    const { truckId } = this.props;
    
    if (truckId) {
      fetch(`${API_URL}/${API_VERSION}/${STEPS_ENDPOINT}?truck=${truckId}`).then(response => response.json()).then((data) => {
        this.setState({
          steps: data || stepsData,
          firstLoaded: true
        });
      });
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    return (! _.isEqual(this.state.steps, nextState.steps));
  }

  componentDidMount() {
    this.inverval = setInterval(() => (this.fetchStepsData()), (REQUEST_INTERVAL_SECONDS * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { truckId } = this.props;
    const { steps, firstLoaded } = this.state;
    const stepperClass = (firstLoaded) ? "stepper" : "stepper loading";
    const Steps = steps.map(step =>
      <Step
        id={step.id}
        title={step.title}
        icon={step.icon}
        disabled={step.disable}
        truckId={truckId}
        key={step.id}
      />
    );

    return (
      <div className={stepperClass}>
        {Steps}
      </div>
    );
  }
}

export default Stepper;
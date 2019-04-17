import React, { Component } from "react";

import "./Stepper.scss";
import stepsData from "./stepsData";
import Step from "../Step/Step.jsx";

const API_URL = "https://5cb612fa07f233001424dade.mockapi.io";
const STEPS_ENDPOINT = "steps";
const REQUEST_INTERVAL_MINUTES = 1;

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: stepsData,
      loaded: false,
      error: false
    };
  }

  handleError() {
    this.setState({
      steps: stepsData,
      loaded: true,
      error: true
    });
  }

  fetchData() {
    this.setState({
      loaded: false,
      error: false
    });
    
    fetch(`${API_URL}/${STEPS_ENDPOINT}`).then(response => response.json()).then((data) => {
      try {
        this.setState({
          steps: data || stepsData,
          loaded: true
        });
      } catch {
        this.handleError();
      }
    }, (error) => {
      this.handleError();
    });
  }

  componentDidMount() {
    this.fetchData();
    this.inverval = setInterval(() => (this.fetchData()), (60 * REQUEST_INTERVAL_MINUTES * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const Steps = this.state.steps.map(step =>
      <Step
        key={step.id}
        title={step.title}
        icon={step.icon}
        disabled={step.disabled}
        current={step.current}
        measuresId={step.measuresId}
      />
    );

    return (
      <div className="stepper">
        {Steps}
      </div>
    );
  }
}

export default Stepper;
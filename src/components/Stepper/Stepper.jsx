import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";

import "./Stepper.scss";
import stepsData from "../../data/steps";
import { STEPS } from "../../data/endpoints";
import { REQUEST_INTERVAL_SECONDS } from "../../data/defaults";

import Step from "../Step/Step.jsx";

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
      Axios.get(STEPS, {
        params: {
          truck: truckId
        }
      }).then(response => {
        let steps;
        try {
          steps = response.data.slice(0, 4);
        } catch {
          steps = stepsData;
        }

        this.setState({
          steps,
          firstLoaded: true
        });
      });
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    return (! _.isEqual(this.state.steps, nextState.steps));
  }

  componentDidMount() {
    this.inverval = setInterval(() => (this.fetchStepsData()), ((REQUEST_INTERVAL_SECONDS / 6) * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { truckId } = this.props;
    const { steps, firstLoaded } = this.state;
    const stepperClass = (firstLoaded) ? "stepper" : "stepper loading";
    const Steps = steps.map((step, index) =>
      <Step
        id={step.id}
        title={step.title}
        icon={step.icon}
        disabled={step.disable}
        truckId={truckId}
        key={index}
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
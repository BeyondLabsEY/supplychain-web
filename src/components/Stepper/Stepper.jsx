import React, { Component } from "react";

import "./Stepper.scss";
import stepsData from "./stepsData";
import Step from "../Step/Step.jsx";

class Stepper extends Component {
  render() {
    const Steps = stepsData.map(step =>
      <Step
        key={step.id}
        title={step.title}
        icon={step.icon}
        disabled={step.disabled}
        current={step.current}
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
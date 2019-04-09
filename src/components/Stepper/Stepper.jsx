import React, { Component } from "react";

import "./Stepper.scss";
import Step from "../Step/Step.jsx";

class Stepper extends Component {
  render() {
    return (
      <div className="stepper">
        <Step
          name="Fazenda"
          icon="cattle"
        />
        <div className="step">
          <div className="title">
            <span>Indústria</span>
          </div>
          <button className="btn btn-primary indicator" type="button">
            <img src="beyond-icons/white/industry.svg" alt="Ícone de uma fábrica representando indústria" width="100" height="100" />
          </button>
        </div>
        <div className="step">
          <div className="title disabled">
            <span>Centro de distribuição</span>
          </div>
          <button className="btn btn-primary indicator" type="button" disabled="disabled">
            <img src="beyond-icons/gray/warehouse.svg" alt="Ícone representando centro de distribuição" width="100" height="100" />
          </button>
        </div>
        <div className="step">
          <div className="title disabled">
            <span>Mercado</span>
          </div>
          <button className="btn btn-primary indicator" type="button" disabled="disabled">
            <img src="beyond-icons/gray/store.svg" alt="Ícone de um mercado" width="100" height="100" />
          </button>
        </div>
      </div>
    );
  }
}

export default Stepper;
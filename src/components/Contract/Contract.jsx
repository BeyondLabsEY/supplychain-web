import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import Axios from "axios";

import "./Contract.scss";
import { CONTRACT } from "../../data/endpoints";
import { REQUEST_INTERVAL_SECONDS, REQUEST_TIMEOUT_SECONDS } from "../../data/defaults";

import Icon from "../Icon/Icon.jsx";

class Contract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contract: null,
      firstLoaded: false
    };
  }

  fetchContractData() {
    Axios.get(CONTRACT).then(response => {
      let contract;
      try {
        contract = response.data.value;
      } catch {
        contract = null;
      }

      if (contract) {
        this.setState({
          contract,
          firstLoaded: true
        });
      }
    });
  }

  componentDidMount() {
    setTimeout(() => (this.fetchContractData()), (REQUEST_TIMEOUT_SECONDS * 1000));
    this.inverval = setInterval(() => (this.fetchContractData()), (REQUEST_INTERVAL_SECONDS * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { contract, firstLoaded } = this.state;
    const contractInfoClass = (firstLoaded) ? "contract-info" : "contract-info loading";
    const notLoaded = ! firstLoaded;

    return (
      <div className={contractInfoClass}>
        <MDBBtn
          tag="a"
          href={contract}
          target="blank"
          role="button"
          color="primary"
          outline
          size="sm"
          disabled={notLoaded}
          id="btnViewTransactions">
            <span className="mr-2 ml-1">Ver transações</span>
            <Icon name="new-tab" />
          </MDBBtn>
      </div>
    );
  }
}

export default Contract;
import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./Contract.scss";
import Icon from "../Icon/Icon.jsx";

const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";
const CONTRACT_ENDPOINT = "contract";
const REQUEST_TIMEOUT_SECONDS = 5;
const REQUEST_INTERVAL_SECONDS = 30;

class Contract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contract: null,
      firstLoaded: false
    };
  }

  fetchContractData() {
    fetch(`${API_URL}/${API_VERSION}/${CONTRACT_ENDPOINT}`).then(response => response.json()).then((data) => {
      this.setState({
        contract: data.value,
        firstLoaded: true
      });
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
          size="sm"
          disabled={notLoaded}>
            <span className="mr-2 ml-1">Ver transações</span>
            <Icon name="forward" />
          </MDBBtn>
      </div>
    );
  }
}

export default Contract;
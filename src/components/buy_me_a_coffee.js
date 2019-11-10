import React from 'react';


export default function BuyMeACoffee() {
  return (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"/>
      <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/tymcsilva" rel="noopener noreferrer">
        <img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ marginLeft: '5px' }}>Buy me a coffee</span>
      </a>
    </React.Fragment>
  );
}
import React, { Component } from 'react'; 
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Navbar, Nav, NavItem, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <div className="footer-container">
      <a className="footer-text" href={'https://explorer.xinfin.network/tokens/xdc7f9ca4193d9539ceb5d3d664c3453c8e8bb6b1ad'} target="_blank">Contract xdc7........b1ad</a>  
      <br/>
      <a className="footer-text" href={'https://www.webthreenames.com/'} target="_blank">webthreenames.com</a><br/>
       <a className="footer-text" href={'https://twitter.com/webthreenames'} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="18" height="18"
viewBox="0 0 30 30" fill="#fff">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg> &nbsp; Twitter</a>  
    </div>
  );
}

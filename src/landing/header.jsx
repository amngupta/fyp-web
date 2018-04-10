import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

  render() {
    return (
        <header className="masthead" id="homeHead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Final Year Project</div>
            <div className="intro-heading text-uppercase">HoloLens&trade; Indoor Spatial Scanner</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>
    );
  }
}

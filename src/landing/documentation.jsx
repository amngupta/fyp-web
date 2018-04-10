import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Documentation extends Component {

    constructor(){
        super();
    }

    render() {

    return (
        <section id="contact">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Documentation</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 text-center">
            
                <h4>
                <a href="../ProjectPlan.pdf">Project Plan</a>
                </h4>
            </div>
            </div>
        </div>
        </section>
    );
  }
}

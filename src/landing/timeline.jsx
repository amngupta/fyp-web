import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends Component {
    render() {

       return (
        <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Timeline</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.png" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>October 1<sup>st</sup></h4>
                      <h4 className="subheading">Phase 1</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Delivery of our detailed project plan. Construction of the project website. 
                      </p>
                    </div>
                  </div>

                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.png" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>January 2018<sup>st</sup></h4>
                      <h4 className="subheading">Phase 2</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Prelimary implentation: Application can scan and store the scanned mesh, create maps that can be visualised on a development machine. Delivery of detailed interim report.
                      </p>
                      <p>

                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.png" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>April 15<sup>th</sup></h4>
                      <h4 className="subheading">Phase 3</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Finalised implentation: Complete HoloLens™ application, processing server, and web portal. Delivery of detailed final reports, preparation for final presentation and exhibition.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                      <br/>Of Our
                      <br/>Story!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
    );
  }
}

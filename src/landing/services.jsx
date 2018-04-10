import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Services extends Component {

    constructor(){
        super();
        this.renderServices = this.renderServices.bind(this);
    }

    renderServices(service, key) {
        return (
            <div className="col-md-4" key={key}>
                <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className={service.icon}></i>
                </span>
                <h4 className="service-heading">{service.title}</h4>
                <p className="text-muted">
                    {service.text}                
                </p>
            </div>
        )
    }



    render() {

        const services = [
            {
                title: "Interior Visualization", 
                text: "Viable solution that would help interior designers, planning commissions, and engineers visualize interiors as holograms and/or virtual environments. This will allow the user to gain a better understanding of the space for their particular use case.",
                icon: "fa fa-object-ungroup  fa-stack-1x fa-inverse"
            },
            {
                title: "Accurate 3D Models",
                text: "Improve on the accuracy of models created using scanning techniques. The application will leverage the 4 environment sensing and 1 depth sensing cameraso scan indoor environments to build wire-frames. The wire-frames will be processed to give the user a unique experience of high-precision 3D models.",
                icon: "fa fa-object-ungroup fa-stack-1x fa-inverse"
            },
            {
                title: "Dynamic Object Filtering",
                text: "The solution will filter out dynamic objects to give the user a static real-world map. Features such as moving people and obstructing objects will be sensed and removed by the HoloLens since they are irrelevant details in the use cases of our application.",
                icon: "fa fa-universal-access fa-stack-1x fa-inverse"
            }
        ]

    return (
    <section id="services">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About the Project</h2>
                <h3 className="section-subheading text-muted">
                    The team is planning to leverage the highly accurate depth-sensing cameras of the Microsoft HoloLens&trade; to scan and reconstruct indoor environments. The team is determined to create an application that can perform spatial reconstruction of indoor spaces using the hardware, and create virtual reality ready maps of the spaces.
                </h3>
            </div>
            </div>
            <div className="row text-center">
            {
                services.map((service, i)=>this.renderServices(service, i))
            }
            </div>
        </div>
    </section>
    );
  }
}

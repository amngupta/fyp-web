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
                text: "Improve on the accuracy of models created using scanning techniques. The application will leverage the 4 environment sensing and 1 depth sensing cameras to scan indoor environments and build a mesh. The mesh will be processed to give the user a unique experience of high-precision 3D models.",
                icon: "fa fa-object-ungroup fa-stack-1x fa-inverse"
            },
            {
                title: "Model Processing",
                text: "The solution will identify and recreate planes, fill holes to build water-tight models, and filter out dynamic objects that are irrelevant to a user to produce a static real-world model.",
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
                    Advancements in hardware have led to the invention of the Microsoft HoloLens™, a mixed reality system that allows users to perform physical interactions with the digital world in real time. The device combines features of Virtual Reality (VR) with the physical world, creating Augmented Reality (AR). Nowadays, 3D indoor models can be constructed using construction blueprints and plans; however sometimes, the plans are unavailable or might not be a true representation. In such cases, the areas must be surveyed and reconstructed through a time consuming and costly process. This project aims to showcase the ease with which The Microsoft Hololens™ can be used to perform spatial reconstruction of indoor environments and to visualize them as holograms. The reconstructed, processed holograms will be complemented with interactive features.             
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

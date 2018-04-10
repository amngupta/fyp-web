import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './modal'
export default class Features extends Component {

    constructor(){
        super();
        this.renderFeatures = this.renderFeatures.bind(this);
    }

    renderFeatures(feature, key) {



        const buttonData = (
            <div className="portfolio-caption">
                <h4>{feature.title}</h4>
            </div>
        )

        return (
            // <div >
        <div className="col-md-4 col-sm-6 portfolio-item"  key={key}>
            <Modal modalBody={feature.modalText} modalHeader={feature.title} buttonImage={feature.image} buttonData={buttonData}/>
        </div>


        //     <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //             <div className="close-modal" data-dismiss="modal">
        //                 <div className="lr">
        //                 <div className="rl"></div>
        //                 </div>
        //             </div>
        //             <div className="container">
        //                 <div className="row">
        //                 <div className="col-lg-8 mx-auto">
        //                     <div className="modal-body">
        //                     <h2>{feature.title}</h2>
        //                     <img className="img-fluid d-block mx-auto" src={feature.image} alt="" />
        //                     <p>{feature.modalText}</p>
        //                     </div>
        //                 </div>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        )
    }



    render() {

        const features = [
            {
                title: "Streamlined UI", 
                image: "../img/portfolio/01-thumbnail.jpg",
                modalText: "A clean and simplistic User Interface that is controlled by voice commands and hand gestures. The friendly UX allows the user to record new environments or view existing holograms easily.",
                modalId: "portfolio1"
            },
            {
                title: "Record New Environments", 
                image: "../img/portfolio/02-thumbnail.jpg",
                modalText: "The core feature of the project. We will be using depth-sensing camera and existing APIs of the Microsoft HoloLens&trade; to create 3D mappings of surrounding environments. The HoloLens&trade; provides hardware and software that is already capable of stitching together surface meshes as a user moves around in an indoor environment.",
                modalId: "portfolio2"
            },
            {
                title: "Visualize as Hologram",
                image: "img/portfolio/03-thumbnail.jpg",
                modalText: "The application will have the ability to project holographic representations of 3D models scanned via the application, and span, zoom, and rotate the holograms on the surface it is projected.",
                modalId: "portfolio3"
            },
            {
                title: "Streamlined Web Application",
                image: "img/portfolio/04-thumbnail.jpg",
                modalText: "A simplistic web application that allows the user to manage their recorded environments on the web.",
                modalId: "portfolio4"
            },
            {
                title: "Environment for VR Headset",
                image: "img/portfolio/05-thumbnail.jpg",
                modalText: "The web portal would also provide an option to export the scanned 3D models (after post processing on the server) to formats compatible with VR headsets such as Oculus Rift&trade; and HTC Vive&trade;, to be used as virtual indoor maps.",
                modalId: "portfolio4"
            }
        ]

    return (
        <section className="bg-light" id="portfolio">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Major Features</h2>
            </div>
            </div>
            <div className="row">
            {
                    features.map((feature, i)=>this.renderFeatures(feature, i))
            }
            </div>
      </div>
    </section>
    );
  }
}

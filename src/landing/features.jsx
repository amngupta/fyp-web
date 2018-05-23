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
                image: "img/features/UnityLibrary.png",
                modalText: "A clean and simplistic User Interface that is controlled by voice commands and hand gestures. The friendly UX allows the user to record new environments or view existing holograms easily.",
                modalId: "portfolio1"
            },
            {
                title: "Record New Environments", 
                image: "img/features/JustBeforeFinalize.jpg",
                modalText: "The core feature of the project. Using depth-sensing camera and existing APIs of the Microsoft HoloLens™ the application creates 3D mappings of surrounding environments. The HoloLens™ provides hardware and software that is already capable of stitching together surface meshes as a user moves around in an indoor environment.",
                modalId: "portfolio2"
            },
            {
                title: "Visualize as Hologram",
                image: "img/features/VV2.jpg",
                modalText: "The application has the ability to project holographic representations of 3D models scanned via the application, and span, place, and rotate the holograms on the surface it is projected.",
                modalId: "portfolio3"
            },
            {
                title: "Streamlined Web Application",
                image: "img/features/portal2.png",
                modalText: "A simplistic web application that allows the user to manage their recorded environments on the web.",
                modalId: "portfolio4"
            },
            {
                title: "Environment for VR Headset",
                image: "img/features/mesh_img.png",
                modalText: "The web portal also provide an option to export the scanned 3D models (after post processing on the server) to formats compatible with VR headsets such as Oculus Rift™ and HTC Vive™, to be used as virtual indoor maps. The scanned models can also be used in 3D modelling software such as Rhino and AutoCAD by designers and architects. ",
                modalId: "portfolio5"
            },
            {
                title: "Process Extranal Models",
                image: "img/features/azureFunctionInternal.jpeg",
                modalText: "The Processing Function is triggered when a new model is added by the HoloLens. Thereafter the function calls the processor, and uploads the processed mesh to an output storage. The mesh processing tasks can also be invoked through the web portal.",
                modalId: "portfolio6"
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

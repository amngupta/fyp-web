import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Documentation extends Component {

    constructor(){
        super();
        this.renderDownloads = this.renderDownloads.bind(this);
    }

    renderDownloads(file, key)
    {
        return(
            <h4 key={key}>
                <a href={"documentations/"+file.fileName} download={file.fileName}>{file.title}</a>
            </h4>
        )

    }

    render() {
        const files = [
        {
            fileName: "Spatial_Reconstruction_using_Microsoft_HoloLens (WZ).pdf",
            title: "Final Report - ZAFAR Waleed"
        },
        {
            fileName: "Spatial_Reconstruction_using_Microsoft_HoloLens(AG).pdf",
            title: "Final Report - GUPTA Aman"
        },
        {
            fileName: "Final Presentation.pdf",
            title: "Final Presentation Slides"
        },
        {
            fileName: "FYP Poster.jpg",
            title: "Exhibition Poster"
        },
        {
            fileName: "Spatial_Reconstruction_using_Microsoft_HoloLens(Interim).pdf",
            title: "Interim Report"
        },
        {
            fileName: "Spatial_Reconstruction_using_Microsoft_HoloLens(Plan).pdf",
            title: "Project Plan"
        } 
    ]
    return (
        <section id="contact">
        <div className="container documentation">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Documentation</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 text-center">
            
                {
                    files.map((v,k) => this.renderDownloads(v, k))
                }
            </div>
            </div>
        </div>
        </section>
    );
  }
}

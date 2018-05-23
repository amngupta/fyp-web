import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModelList extends Component {

    constructor(props)
    {
        super(props);
        this.loadList = this.loadList.bind(this);
        this.renderModels = this.renderModels.bind(this);
        this.state = {
            modelList: [],
            selectedContainer: props.container
        }
    }

    componentDidMount()
    {
        this.loadList();
    }
    componentWillReceiveProps(nextProps)
    {
        if(this.props.container !== nextProps.container)
        {
            this.setState({
                selectedContainer : this.props.container
            })
            this.loadList();
        }
    }

    loadList()
    {
        if (this.state.selectedContainer == "output-objects")
        {
            this.setState({
               
            })
        }
        if (this.state.selectedContainer == "recorded-objects")
        {
            this.setState({
                modelList: [{
                    name: 'DotNet.obj',
                    metadata: {}
                }]
            })
        }
    }


    renderModels(model, key) {
        const downloadLink = `https://hkufyp17010.blob.core.windows.net/output-objects/${model.name}`;

        return (
            <div className="col-md-4 col-sm-6 portfolio-item" key={key}>
                <div className="portfolio-caption">
                <h4>
                  {model.displayName} &nbsp;
                  <a download={model.name} href={downloadLink}><i className="fa fa-download" ></i></a>
                </h4>
                </div>
            </div>
        )
    }



    render() {
        const models =  [
        {
            displayName: "HW Corridors",
            name: 'HW_Corridors.obj',
            metadata: {}
        },
        {
            displayName: "HW 335 Lab",
            name: '335_PSD_AFR.obj',
            metadata: {}
        },
        {
            displayName: "HW 310B Lab",
            name: '310B_PSD_AFR.obj',
            metadata: {}
        }]
    return (
        <section className="bg-light" id="models">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Processed Models</h2>
                    </div>
                </div>
                <div className="row">
                    {models.map((model,i)=>this.renderModels(model,i))}
                </div>
            </div>
        </section>
    );
  }
}

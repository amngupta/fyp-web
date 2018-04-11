import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModelView from './modelview'
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
                modelList: [{
                    name: '310B_Blob.obj',
                    metadata: {}
                }]
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
        return (
            <ModelView model={model} key={key} container={this.props.container} />
        )
    }



    render() {
        
    return (
        <section className="bg-light" id="portfolio">
        <div className="container">
            <div className="row">
                {this.state.modelList.map((model,i)=>this.renderModels(model,i))}
            </div>
        </div>
        </section>
    );
  }
}

ModelList.propTypes = {
    container: PropTypes.string
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Tab, Nav, NavItem} from 'react-bootstrap'
import ModelList from './modellist'

export default class Containers extends Component {

    constructor()
    {
        super();
        this.state = {
            currentContainer: 'recorded-objects'
        }
        this.renderContainers = this.renderContainers.bind(this);
    }
    renderContainers(container, key)
    {
        return (
            <li className="nav-item" key={key}>

            {
                (container==this.state.currentContainer) ? 
                <h4 className="nav-link" onClick={this.setCurrentContainer.bind(this, container)}><u>{container}</u></h4>
                :
                <h4 className="nav-link" onClick={this.setCurrentContainer.bind(this, container)}>{container}</h4>
            }
            </li>
        )
    }
    setCurrentContainer(container){
        console.log("Setting " + container);
        this.setState({
            currentContainer: container
        })
    }
    render() {
        
        const blob_containers = [
            "recorded-objects", "output-objects"
        ]
        return (
            <div>
                <ul className="nav justify-content-center">
                    {blob_containers.map((container,i)=> this.renderContainers(container, i))}
                </ul>

                <ModelList container={this.state.currentContainer} />
            </div>
        );
    }
}

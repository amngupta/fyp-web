import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Row, 
  Modal, Popover, Tooltip, 
  OverlayTrigger, Col, FormGroup, 
  ControlLabel, Checkbox, FormControl, Form
} from 'react-bootstrap';

export default class ModalProp extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.downloadFile = this.downloadFile.bind(this);
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    downloadFile()
    {
      console.log("Downloading blob ", this.props.model.name, "from ", this.props.container);
    }

    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <a className="portfolio-link" data-toggle="modal" onClick={this.handleShow} >
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img className="img-fluid" src={this.props.buttonImage} alt="" />
          </a>
          {this.props.buttonData}
          <Modal show={this.state.show} onHide={this.handleClose}         >
            <Modal.Header>
              <Modal.Title>{this.props.modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.modalBody}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

  Modal.propTypes = {
    modalBody : PropTypes.node,
    modalHeader : PropTypes.node,
    buttonData : PropTypes.node
  }
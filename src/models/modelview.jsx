import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Row, 
  Modal, Popover, Tooltip, 
  OverlayTrigger, Col, FormGroup, 
  ControlLabel, Checkbox, FormControl, Form
} from 'react-bootstrap';

export default class ModelView extends Component {
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
        <div className="col-md-4 col-sm-6 portfolio-item">
          <div>
                <a className="portfolio-link" onClick={this.handleShow} >
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img className="img-fluid" src="../img/header-bg2.jpg" alt="" />
                </a>
                <div className="portfolio-caption">
                <h4>{this.props.model.name}</h4>
                </div>
            </div>
          <Modal show={this.state.show} onHide={this.handleClose}         
            bsSize="large"
            aria-labelledby="contained-modal-title-lg">
            <Modal.Header>
              <Modal.Title>{this.props.model.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Row>
              <Col md={6}>
                <h2>Existing Mesh Info/Model</h2>
                <Button className="align-left" onClick={this.downloadFile}>Download </Button>
              </Col>
              <Col md={6}>
              <Form>
                <FormGroup controlId="formOBJFilename">
                  <Col componentClass={ControlLabel} sm={12}>
                    Output Filename:
                  </Col>
                  <Col sm={12}>
                    <FormControl type="text" placeholder="Filename.obj" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Run All Algorithms</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect1">
                  <ControlLabel>Alogrithm 1:</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="null"></option>
                    <option value="af">Advancing Front</option>
                    <option value="ps">Poission Surface Reconstruction</option>
                    <option value="ps">RANSAC Pointset Shape Detection </option>
                </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect2">
                  <ControlLabel>Alogrithm 2:</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="null"></option>
                    <option value="af">Advancing Front</option>
                    <option value="ps">Poission Surface Reconstruction</option>
                    <option value="ps">RANSAC Pointset Shape Detection </option>
                </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect3">
                  <ControlLabel>Alogrithm 3:</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="null"></option>
                    <option value="af">Advancing Front</option>
                    <option value="ps">Poission Surface Reconstruction</option>
                    <option value="ps">RANSAC Pointset Shape Detection </option>
                </FormControl>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </FormGroup>



              </Form>
              </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

  ModelView.propTypes = {
    model: PropTypes.object,
    container: PropTypes.string
  }
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
        show: false,
        runAllFunctions: false,
        count: 3,
        advancingFront: false,
        poissionReconstruction: false,
        ransacPointSet: false
      };
      this.submitForm = this.submitForm.bind(this);
      this.renderOptions = this.renderOptions.bind(this);
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

    submitForm(e)
    {
      e.preventDefault();
      var {outputfile, runAllFunctions} = this.state;
      var commandQuery = {};
      commandQuery.functions = []

      commandQuery.inputFile = this.props.model.name;
      commandQuery.inputContainer = this.props.container;
      if (!outputfile)
      {
        outputfile = this.props.model.name;
      }
      if (!outputfile.endsWith(".obj"))
      {
        commandQuery.outputFile = outputfile+".obj";
      }
      else{
        commandQuery.outputFile = outputfile;
      }
      if (this.state.runAllFunctions || this.state.advancingFront)
      {
        var afParams = {};
        afParams.function = "af";
        afParams.probability = parseFloat(this.state.afProbability) ? parseFloat(this.state.afProbability) : 0.05 ;
        afParams.clusterEpsilon = parseFloat(this.state.afClusterEpsilon) ? parseFloat(this.state.afClusterEpsilon) : 0.05 ;
        afParams.normalThreshold = parseFloat(this.state.afNormalThreshold) ?  parseFloat(this.state.afNormalThreshold) : 0.8;
        afParams.epsilon = parseFloat(this.state.afEpsilon) ? parseFloat(this.state.afEpsilon) : 0.005 ;
        afParams.minimumPoints = parseFloat(this.state.afMinimumPoints) ? parseFloat(this.state.afMinimumPoints) : 100 ;
        commandQuery.functions.push(afParams);
      }
      
      if (this.state.runAllFunctions || this.state.poissionReconstruction)
      {
        var params = {};
        params.function = "ps";
        commandQuery.functions.push(params);
      }
      
      if (this.state.runAllFunctions || this.state.ransacPointSet)
      {
        var params = {};
        params.function = "rps";
        commandQuery.functions.push(params);
      }
      console.log(commandQuery);
     
    }

    renderOptions(obj, key)
    {
      return (
        <option value={obj.value} key={key}>
          {obj.label} 
        </option>
      )
    }

    render() {
      const tooltip = (
        <Tooltip id="tooltip">
          <strong>Make sure to add a filename!</strong>.
        </Tooltip>
      );
      const algorithms = [
        {
          label: "Advancing Front",
          value: "af"
        },
        {
          label: "Poission Surface Reconstruction",
          value: "ps"
        },
        {
          label: "RANSAC Pointset Shape Detection",
          value: "rps"
        }
      ]
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
                {/* <form method="get" action="file.doc"> */}
                  <Button className="align-left btn btn-primary" download={this.props.model.name} href={"https://hkufyp17010.blob.core.windows.net/"+this.props.container+"/"+this.props.model.name}>Download </Button>
                {/* </form> */}
              </Col>
              <Col md={6}>
              <Form>
                <OverlayTrigger placement="right" overlay={tooltip}>
                <FormGroup controlId="formOBJFilename">
                  <ControlLabel>
                    Output Filename:
                  </ControlLabel>
                    <FormControl type="text" defaultValue={this.props.model.name} required={true} placeholder="Filename.obj" onChange={(e) => {
                         this.setState({ outputfile: e.target.value })} } />
                  </FormGroup>
                </OverlayTrigger>
                <FormGroup>
                    <Checkbox onChange={(e)=> {
                      this.setState({runAllFunctions: !this.state.runAllFunctions})
                    }}>Run All Algorithms</Checkbox>
                </FormGroup>
                      

                {/* {this.renderAlgorithmsDropDowns()} */}
                <Checkbox disabled={this.state.runAllFunctions} onChange={(e)=> {
                      this.setState({advancingFront: !this.state.advancingFront})
                    }}>Advancing Front</Checkbox>  


                    {
                      (this.state.advancingFront || this.state.runAllFunctions) && 
                      <div>
                        <FormGroup>
                        <ControlLabel>
                          Probability:
                        </ControlLabel>
                          <FormControl type="number" required={true} 
                          placeholder="Probability" defaultValue={0.05} onChange={(e) => {
                              this.setState({ afProbability: e.target.value })} } />
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>
                          Minimum Points:
                        </ControlLabel>
                          <FormControl type="number" required={true} 
                          placeholder="Minimum Points" defaultValue={100} onChange={(e) => {
                              this.setState({ afMinimumPoints: e.target.value })} } />
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>
                        Epsilon :
                        </ControlLabel>
                          <FormControl type="number" required={true} 
                          placeholder="Epsilon" defaultValue={0.005} onChange={(e) => {
                              this.setState({ afEpsilon: e.target.value })} } />
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>
                          Cluster Epsilon:
                        </ControlLabel>
                          <FormControl type="number" required={true} 
                          placeholder="Cluster Epsilon" defaultValue={0.05} onChange={(e) => {
                              this.setState({ afClusterEpsilon: e.target.value })} } />
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>
                          Normal Threshold:
                        </ControlLabel>
                          <FormControl type="number" required={true} 
                          placeholder="Normal Threshold" defaultValue={0.8} onChange={(e) => {
                              this.setState({ afNormalThreshold: e.target.value })} } />
                        </FormGroup>
                      </div>
                    }


                  <Checkbox disabled={this.state.runAllFunctions} onChange={(e)=> {
                    this.setState({poissionReconstruction: !this.state.poissionReconstruction})
                  }}>Poission Surface Reconstruction</Checkbox>  

                  <Checkbox disabled={this.state.runAllFunctions} onChange={(e)=> {
                    this.setState({ransacPointSet: !this.state.ransacPointSet})
                  }}>RANSAC Pointset Shape Detection</Checkbox>  

                {/* <FormGroup controlId="formControlsSelect1">
                  <ControlLabel>Alogrithm 1:</ControlLabel>
                  <FormControl componentClass="select" disabled={this.state.runAllFunctions} 
                    placeholder="select" onChange={(e)=> this.setState({algo1: e.target.value})}>
                    <option value="null"></option>
                    {algorithms.map((a,i)=>this.renderOptions(a,i))}
                </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect2">
                  <ControlLabel>Alogrithm 2:</ControlLabel>
                  <FormControl componentClass="select" disabled={this.state.runAllFunctions} 
                    placeholder="select" onChange={(e)=> this.setState({algo2: e.target.value})}>
                    <option value="null"></option>
                    {algorithms.map((a,i)=>this.renderOptions(a,i))}
                </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect3">
                  <ControlLabel>Alogrithm 3:</ControlLabel>
                  <FormControl disabled={this.state.runAllFunctions} componentClass="select" 
                    placeholder="select" onChange={(e)=> this.setState({algo3: e.target.value})}>
                    <option value="null"></option>
                    {algorithms.map((a,i)=>this.renderOptions(a,i))}
                </FormControl>
                </FormGroup> */}

                <FormGroup>
                    <Button disabled={!this.state.runAllFunctions && !this.state.ransacPointSet && !this.state.poissionReconstruction && !this.state.advancingFront}
                    type="submit" onClick={this.submitForm}>Submit</Button>
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
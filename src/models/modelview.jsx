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
      };
      this.submitForm = this.submitForm.bind(this);
      this.renderOptions = this.renderOptions.bind(this);
      // this.renderAlgorithmsDropDowns = this.renderAlgorithmsDropDowns.bind(this)
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
      const {outputfile, runAllFunctions, algo1, algo2, algo3} = this.state;
      var commandQuery = {};
      commandQuery.functions = []
      if (outputfile)
      {
        commandQuery.inputFile = this.props.model.name;
        commandQuery.inputContainer = this.props.container;
        if (!outputfile.endsWith(".obj"))
        {
          commandQuery.outputFile = outputfile+".obj";
        }
        else{
          commandQuery.outputFile = outputfile;
        }
        commandQuery.runAllFunctions = runAllFunctions;
        if (!runAllFunctions)
        {
          if (algo1 !== "null")
          {
            commandQuery.functions.push(algo1);
          }        
          if (algo2 !== undefined || algo2 !== "null")
          {
            commandQuery.functions.push(algo2);
          }        
          if (algo3 !== undefined || algo3 !== "null")
          {
            commandQuery.functions.push(algo3);
          }
        }
        console.log(commandQuery);
      }
     
    }

    renderOptions(obj, key)
    {
      return (
        <option value={obj.value} key={key}>
          {obj.label} 
        </option>
      )

    }

    renderAlgorithmsDropDowns()
    {
        const {count, runAllFunctions} = this.state;
        var selects= [];
        for (var i = 1; i <= count; i++) {
            var temp = {
              controlId: "formControlsSelect"+i,
              controlLabel: "Algorithm " + i,
              onchangeVar: "algo"+i
            }
            selects.push(temp);
        }
        console.log(selects);

        return
        <div>{
          selects.map((a,i)=> {
              return(
                  <FormGroup controlId={a.controlId} key={i}>
                  <ControlLabel>{a.controlLabel}</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="null"></option>
                      <option value="af">Advancing Front</option>
                      <option value="ps">Poission Surface Reconstruction</option>
                      <option value="ps">RANSAC Pointset Shape Detection </option>
                  </FormControl>
                </FormGroup>
              )
            })
          }
          </div>
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
                    <FormControl type="text" required={true} placeholder="Filename.obj" onChange={(e) => {
                        this.setState({ outputfile: e.target.value })} } />
                  </FormGroup>
                </OverlayTrigger>
                <FormGroup>
                    <Checkbox onChange={(e)=> {
                      this.setState({runAllFunctions: !this.state.runAllFunctions})
                    }}>Run All Algorithms</Checkbox>
                </FormGroup>
                      

                {/* {this.renderAlgorithmsDropDowns()} */}
                    
                <FormGroup controlId="formControlsSelect1">
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
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" onClick={this.submitForm}>Submit</Button>
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
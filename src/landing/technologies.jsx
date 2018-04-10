import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Technologies extends Component {

    constructor(){
        super();
        this.renderTech = this.renderTech.bind(this);
    }

    renderTech(tech, key) {
       return (
        <div className="col-md-4 col-sm-6" key={key}>
            <a href={tech.link} >
                <img className="img-fluid d-block mx-auto img-banner" src={tech.logo} alt="" />
            </a>
        </div>
        )
    }



    render() {

        const tech = [
            {
                link: "",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2000px-Microsoft_logo_%282012%29.svg.png"
            },
            {
                link: "",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png"
            },
            {
                link: "",
                logo: "http://i.cs.hku.hk/~xghan/images/CSHKU_logo.png"
            }
        ]

    return (
        <section className="py-5">
            <div className="container">
            <div className="row">
                {tech.map((t,i)=>this.renderTech(t, i))}
            </div>
            </div>
      </section>
  
    );
  }
}

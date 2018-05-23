import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Team extends Component {

    constructor(){
        super();
        this.renderTeam = this.renderTeam.bind(this);
    }

    renderTeam(person, key) {
        return (
            <div className="col-md-4 col-sm-6" key={key}>
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={person.image} alt="" />
                <h4>{person.name}</h4>
                <p className="text-muted">{person.title}</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href={person.facebook}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={person.linkedin}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        )
    }



    render() {

        const team = [
            {
                name: "Dirk Schneiders", 
                title: "Project Superviser",
                image: "img/team/1.jpg",
                facebook:"https://www.facebook.com/scdirk",
                linkedin: "https://www.linkedin.com/in/scdirk"
            },
            {
                name: "Aman Gupta",
                title: "Team Member",
                image: "img/team/awesomeA.jpg",
                facebook: "https://www.facebook.com/amngupta",
                linkedin: "https://www.linkedin.com/in/amngupta"
            },
            {
                name: "Waleed Zafar",
                title: "Team Member",
                image: "img/team/bigW.jpg",
                facebook: "https://www.facebook.com/waleedzaf94",
                linkedin: "https://www.linkedin.com/in/waleed-zafar-7b491765"
            },
        ]

    return (
        <section className="bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Team</h2>
            </div>
          </div>
            <div className="row">
                {team.map((person, i)=>this.renderTeam(person,i))}

            </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                  The team followed the Agile Development Methodology throughout the project. 
                  <br />
                  <br />
                  The team members have unique expertise and divided the work accordingly. Mr. Aman Gupta has a strong web-development and app-development background; therefore he worked on the HoloLens™ application UI, the development of the web platform, as well as the design of the Azure services. Whereas, Mr. Waleed Zafar focused on the development of the mesh processing algorithms using CGAL library.
                  <br />
                  <br />
                  By phasing the development process, the team was able to adhere to the strict timeline of the Final Year Project as well as have an integrated application ready at the end of each sprint.
              </p>
            </div>
          </div>
        </div>
      </section>
  
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
} from 'react-router-dom'
import Containers from './models/containers'
import { HashLink, NavHashLink  } from 'react-router-hash-link';

import Home from './landing/home';
import Footer from './footer'
export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = { tempOpen: false};
    }
    render() {
        
        function hashLinkScroll() {
            const { hash } = window.location;
            if (hash !== '') {
            // Push onto callback queue so it runs after the DOM is updated,
            // this is required when navigating from a different page so that
            // the element is rendered on the page before trying to getElementById.
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
            }
        }

        return (
            <Router    
                onUpdate={hashLinkScroll}>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <NavHashLink smooth  to="/#homeHead" className="navbar-brand js-scroll-trigger">FYP17010</NavHashLink>
                        {/* <NavHashLink smooth to="/containers" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navbarResponsive" aria-expanded="false">
                            View Models
                        </NavHashLink> */}
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                            <HashLink smooth  className="nav-link js-scroll-trigger" to="/#services">About the Project</HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink smooth  className="nav-link js-scroll-trigger" to="/#portfolio">Major Features</HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink smooth  className="nav-link js-scroll-trigger" to="/#about">Timeline</HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink smooth className="nav-link js-scroll-trigger" to="/#team">Team</HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink smooth className="nav-link js-scroll-trigger" to="/#contact">Documentation</HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink smooth className="nav-link js-scroll-trigger" to="/#models">Models</HashLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavHashLink smooth to="/containers" className="nav-link js-scroll-trigger">View Models</NavHashLink>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                    </nav>
                <Route exact path="*" component={Home} />
                {/* {/* <Route path="/blobs/:container" component={BlobList}/> */}
                {/* <Route path="/containers" component={Containers}/> */}
                <Footer />

                </div>
            </Router>
        )
    }
} 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header'
import Services from './services'
import Features from './features'
import Timeline from './timeline'
import Team from './team'
import Technologies from './technologies'
import ModelList from './models'
import Documentation from './documentation'
export default class Home extends Component {

  render() {
    return (
        <div>
            <Header />
            <Services />
            <Features />
            <Timeline />
            <Team />
            <Technologies />
            <Documentation />
            <ModelList />
        </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};
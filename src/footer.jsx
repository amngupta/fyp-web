import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {

    render() {

    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="copyright">Copyright &copy; Aman Gupta & Waleed Zafar</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

'use strict';

var React = require('react');

var Navbar = require('../components/navbar.jsx');
var Login = require('../components/buttons/login.jsx');
var Logout = require('../components/buttons/logout.jsx');
var RateLimit = require('./github/rate-limit.jsx');

module.exports = React.createClass({
  render: function () {
    var Authentification = <Login/>;

    if (this.props.authenticated) {
      Authentification = <Logout/>;
    }

    return (
      <header className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#nav-header"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">SnowShoe</a>
          </div>

          <div className="collapse navbar-collapse" id="nav-header">

            {this.props.accessToken || this.props.authenticated ? <Navbar user={this.props.user} accessToken={this.props.accessToken} /> : ''}

            <div className="navbar-right">
              <RateLimit />
              <ul className="nav navbar-nav">
                {Authentification}
              </ul>
            </div>

          </div>
        </div>
      </header>
    );
  }
});

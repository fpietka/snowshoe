'use strict';

var React = require('react');

var defaults = {
  stylesheets: [{
    href: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.4/slate/bootstrap.min.css'
  }],
  scripts: [{
    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'
  }, {
    src: '//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'
  }],
  metas: []
};

var Layout = React.createClass({
  getDefaultProps: function () {
    return {
      stylesheets: [],
      scripts: [],
      metas: [],
      title: 'SnowShoe - Github Dashboards'
    };
  },
  render: function () {
    var stylesheets = defaults.stylesheets.concat(this.props.stylesheets || []);
    var scripts = defaults.scripts.concat(this.props.scripts || []);
    var metas = defaults.metas.concat(this.props.metas || []);

    return (
      <html>
        <head>
          <title>{this.props.title}</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {metas.map(function (meta, index) {
            return (
              <meta key={index} {...meta}/>
            );
          })}
          {stylesheets.map(function (stylesheet, index) {
            return (
              <link rel="stylesheet" key={index} {...stylesheet}/>
            );
          })}
          {scripts.map(function (script, index) {
            return (
              <script key={index} {...script}/>
            );
          })}
          <link rel="icon" type="image/png" href="/favicon.png" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = Layout;

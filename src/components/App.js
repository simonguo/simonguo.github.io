import React from 'react';

const Section = ({ title, className, children } = props) => (
  <div className={className}>
    {title ? <h2>{title}</h2> : null}
    <ul>{children}</ul>
  </div>
);

const Item = ({ children, href } = props) => (
  <li>
    {href ? <a href={href} className="item">{children}</a> : <span className="item">{children}</span>}
  </li>
);

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    );
  }
});

export default App;

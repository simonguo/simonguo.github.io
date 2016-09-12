import React from 'react';

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

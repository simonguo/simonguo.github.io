import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './Editor';

const Profile = require('fs').readFileSync(__dirname + '/Profile.js', 'utf8');
const Banner = React.createClass({

    render: function () {

        return (
            <Editor code={Profile} >
                {this.props.children}
            </Editor>
        );
    }
});

export default Banner;


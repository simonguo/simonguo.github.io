import React from 'react';
import { render } from 'react-dom';

import { Router, hashHistory } from 'react-router';

// style
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/base16-dark.css';
import './less/index.less';

import routes from './routes';

render((
    <Router history={hashHistory} routes={routes} />
), document.getElementById('root'));

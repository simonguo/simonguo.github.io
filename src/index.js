import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';

// style
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/base16-dark.css';
import './less/index.less';

import routes from './routes';

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('root'));

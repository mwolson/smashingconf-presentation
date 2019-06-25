import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

const webpackRequireContext = require.context(
  '!raw-loader!../public/code',
  false,
  /.+/,
)

// Convert to Map
const files = webpackRequireContext.keys().reduce((map, fileName) => {
  const content = webpackRequireContext(fileName)
  // remove the leading './'
  if (fileName.startsWith('./')){
    fileName = fileName.substr(2)
  }

  return map.set(fileName, content);
}, new Map())

ReactDOM.render(<Presentation files={files} />, document.getElementById('root'));
registerServiceWorker();

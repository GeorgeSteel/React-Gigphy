import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import GifExpertApp from './components/GifExpertApp'

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

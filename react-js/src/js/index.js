require('../css/styles.css')

import dataColors from './colors.json'
import React from 'react'
import { render } from 'react-dom'
import Colors from './components/colors.js'

render(<Colors data={dataColors.colors} />, document.getElementById('container'))
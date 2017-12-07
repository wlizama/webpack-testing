require('../css/styles.css')
import { mensajillo, futureMessage } from './messages.js'
import messageMaker from './messageMaker.js'
import appendToDOM from './appendToDOM.js'

// document.write(`Hi •••► ${mensajillo}`)
appendToDOM(messageMaker(mensajillo))
futureMessage()
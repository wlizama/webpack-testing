import messageMaker from './messageMaker'
import appendToDOM from './appendToDOM'

const waitMsg = new Promise((success, failture) => {
  setTimeout(() => {
    success('Mensaje despues de 3s')
  }, 3000)
})

module.exports = {
  mensajillo : '○ Mensaje importado desde messajes.js ○',
  otroMensajillo : 'Otro mensajillo',
  futureMessage : async () => {
    const msg = await waitMsg
    appendToDOM(messageMaker(msg))
  }
}
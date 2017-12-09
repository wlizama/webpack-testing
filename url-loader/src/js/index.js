require('../css/styles.css')

import pkImg from '../images/pica.gif'

const img = document.createElement('img')
img.setAttribute('src', pkImg)
img.classList.add('pica-class')
document.body.append(img)
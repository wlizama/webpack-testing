require('../css/styles.css')

import dataScripts from './scripts.json'


dataScripts.scripts.forEach((item) => {
  var div = document.createElement('div')
  
  const spanNm = document.createElement('span')
  const spanSc = document.createElement('span')

  spanNm.classList.add("name")
  spanSc.classList.add("script")

  spanNm.textContent = item.name + ": "
  spanSc.textContent = item.script

  div.classList.add("script-list")
  div.append(spanNm)
  div.append(spanSc)

  document.body.append(div)
})

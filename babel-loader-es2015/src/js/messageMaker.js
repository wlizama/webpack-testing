function messageMaker(msg) {
  const elem = document.createElement('p')
  elem.textContent = msg
  return elem
}

export default messageMaker
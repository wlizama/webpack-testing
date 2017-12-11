require('../css/url-loader-videos.css')

import video from '../videos/668258310.mp4'  

const elm = document.createElement('video')
elm.setAttribute('src', video)
elm.setAttribute('controls', true)
elm.setAttribute('autoplay', true)
elm.classList.add('video-class')

document.body.append(elm)

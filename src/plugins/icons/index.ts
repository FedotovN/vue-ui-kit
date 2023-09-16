import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import icons from './icons'
icons.forEach(icon => library.add(icon))

export default FontAwesomeIcon;
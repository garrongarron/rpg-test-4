import './css/style.scss'
import './ui/visual-effects.scss'
import goTo from './scene/SceneHandler.js'


let i = location.search.replace('?', '')
i = (i == '') ? 1 : i
goTo('scene' + i)
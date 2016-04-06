
import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import menu from './menu'
import navi from './navigationbar'
import article from './article'
import tag from './tags'
export default combineReducers({
  menu,
  navi,
  article,
  tag,
})

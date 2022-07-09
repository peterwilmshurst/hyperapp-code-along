import { app } from 'hyperapp'
import view from './view'
import './scss/style.scss'

app({
  init: {newItem: null, items: [], done: []},
  view,
  node: document.getElementById('app')
})

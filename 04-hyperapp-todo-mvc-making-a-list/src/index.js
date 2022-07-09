import { app } from 'hyperapp'
import view from './view'

app({
  init: {newItem: null, items: []},
  view,
  node: document.getElementById('app')
})

import { app } from 'hyperapp'
import view from './view'

app({
  init: { name: 'John Doe', clicks: 0 },
  view,
  node: document.getElementById('app')
})

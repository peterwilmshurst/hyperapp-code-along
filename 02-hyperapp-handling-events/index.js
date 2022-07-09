import { h, text, app } from "https://unpkg.com/hyperapp"

const ClickHandler = (state) => ({...state, clicks: state.clicks + 1})
const InputHandler = (state, event) => ({...state, name: event.target.value})

app ({
  init: {name: 'John Doe', clicks: 0},
  view: (state) => h('main', {}, [
    h('h1', {class: 'greeting'}, text('Hello, ' + state.name)),
    h('h2', {}, text('Clicks: ' + state.clicks )),
   // h('button', {onclick: (state) => ({...state, clicks: state.clicks + 1})}, text('Click me')) - Usually we don't want to inline Actions like this as things can get messy fast (but it is possible) so we create an variable for the Action ...
    h('button', {onclick: ClickHandler}, text('Click me')),
    h('p', {}, [
      text('Please enter your name'),
      h('input', {
        type: 'text',
        value: state.name,
        oninput: InputHandler
      })
    ])
  ]),
  node: document.getElementById('app')
})
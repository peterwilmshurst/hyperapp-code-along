import { h, text, app } from "https://unpkg.com/hyperapp"

app ({
  init: {},
  view: () => h('main', {}, [
    h('h1', {class: 'greeting'}, text('Hello World'))
  ]),
  node: document.getElementById('app')
})

/*
<main>
<h1 class='greeting'>Hello World</h1>
</main>
*/
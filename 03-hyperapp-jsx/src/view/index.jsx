/** @jsx h */
import h from 'hyperapp-jsx-pragma'

const ClickHandler = (state) => ({ ...state, clicks: state.clicks + 1 })
const InputHandler = (state, event) => ({ ...state, name: event.target.value })

export default (state) =>
  <main>
    <h1 class='greeting'>Hello, {state.name}</h1>
    <h2>Clicks: {state.clicks}</h2>
    <button onclick={ClickHandler}>Click me</button>
    <p>
      Please enter your name
      <input type='text' value={state.name} oninput={InputHandler} />
    </p>
  </main>

// h('main', {}, [
//     h('h1', {class: 'greeting'}, text('Hello, ' + state.name)),
//     h('h2', {}, text('Clicks: ' + state.clicks )),
//    // h('button', {onclick: (state) => ({...state, clicks: state.clicks + 1})}, text('Click me')) - Usually we don't want to inline Actions like this as things can get messy fast (but it is possible) so we create an variable for the Action ...
//     h('button', {onclick: ClickHandler}, text('Click me')),
//     h('p', {}, [
//       text('Please enter your name'),
//       h('input', {
//         type: 'text',
//         value: state.name,
//         oninput: InputHandler
//       })
//     ])

/** @jsx h */
import h from 'hyperapp-jsx-pragma'

const InputNewItem = (state, event) => ({
  ...state,
  newitem: event.target.value
})

const AddItem = state => !state.newitem ? state : ({
  ...state,
  items: [state.newitem, ...state.items],
  done: [false, ...state.done],
  newitem: null
})

const ToggleDone = (state, index) => {
  let done = [...state.done]
  done[index] = !done[index]
  return {...state, done}
}

export default (state) =>
  <main>
    <header><h1>Todo App</h1></header>
    <main>
      <input type='text' value={state.newitem} oninput={InputNewItem} placeholder='What do you need to do?' />
      <button onclick={AddItem}>+</button>
      </main>
      <section class="item-list">
      <ul>
        {state.items.map((itemText, index) => <li>
          <input type="checkbox" oninput={[ToggleDone, index]} checked={state.done[index]}></input>
          <span className={state.done[index] ? 'done' : null}>{itemText}</span></li>)}
      </ul>
      </section>
    </main>

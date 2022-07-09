/** @jsx h */
import h from 'hyperapp-jsx-pragma'

const InputNewItem = (state, event) => ({
  ...state,
  newitem: event.target.value
})

const AddItem = state => !state.newitem ? state : ({
  ...state,
  items: [state.newitem, ...state.items],
  newitem: null
})

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
         {itemText}</li>)}
      </ul>
      </section>
    </main>

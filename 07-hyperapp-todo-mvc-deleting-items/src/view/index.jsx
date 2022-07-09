/** @jsx h */
import h from 'hyperapp-jsx-pragma'

const withEnterKey = action => (state, payload) => {
  if (payload.key && payload.key === 'Enter') return [action, payload]
  return state
}

const withTargetValue = action => (state, payload) => {
  if (payload.target && payload.target.value) return [action, payload.target.value]
  return state
}

const InputNewItem = (state, input) => ({
  ...state,
  newitem: input
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

const Delete = (state, index) => {
  let items = [...state.items]
  let done = [...state.done]
  items.splice(index, 1)
  done.splice(index, 1)
  return {...state, items, done}
}

export default (state) =>
  <main>
    <header><h1>Todo App</h1></header>
    <main>
      <input type='text' value={state.newitem} oninput={withTargetValue(InputNewItem)} placeholder='What do you need to do?' onkeypress={withEnterKey(AddItem)} />
      <button onclick={AddItem}>+</button>
      </main>
      <section class="item-list">
      <ul>
        {state.items.map((itemText, index) => <li>
          <input type="checkbox" oninput={[ToggleDone, index]} checked={state.done[index]}></input>
          <span className={state.done[index] ? 'done' : null}>{itemText}</span> <button onclick={[Delete, index]}>X</button></li>)}
      </ul>
      </section>
    </main>

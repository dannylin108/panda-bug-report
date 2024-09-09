import { stack } from '../styled-system/patterns'

function App() {

  return (
    <div class={stack({p: 6})}>
      <h1>Vite + Solid</h1>
      <div class="book-content">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Some interesting text
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  )
}

export default App

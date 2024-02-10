import './App.css'
import ResetBtn from './ResetBtn'
import { useAppStore } from './stores/AppStore'

function App() {
  const appStore = useAppStore()

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button type="button" onClick={() => appStore.increase(1)}>
          count is {appStore.counter}
        </button>

        <ResetBtn />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

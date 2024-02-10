import './App.css'
import CounterForm1 from './CounterForm1'
import CounterForm2 from './CounterForm2'

function App() {
  console.log('reload App')

  return (
    <>
      {/* <CounterForm counterStore={counterStore1} /> */}
      <CounterForm1 />
      <CounterForm2 />

      <hr />

      {/* <CounterForm counterStore={counterStore2} /> */}
    </>
  )
}

export default App

import ResetBtn from './ResetBtn'
import { CounterStore, useAppStore } from './zustand/AppStore'

export interface ICounterFormProps {
  counterStore: CounterStore
}

export default function CounterForm(props: ICounterFormProps) {
  const appStore = useAppStore()

  return (
    <div className="card">
      <button
        type="button"
        onClick={() => appStore.doubleIncrease(props.counterStore)}
      >
        +2
      </button>

      <ResetBtn counterStore={props.counterStore} />

      <div>count is {props.counterStore.counter}</div>
    </div>
  )
}

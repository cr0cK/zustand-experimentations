import ResetBtn from './ResetBtn'
import { useAppStore, useCounterStore2 } from './stores/AppStore'

export interface ICounterForm2Props {}

export default function CounterForm2(props: ICounterForm2Props) {
  const counterStore1 = useCounterStore2()
  const appStore = useAppStore()

  return (
    <div className="card">
      <button
        type="button"
        onClick={() => appStore.doubleIncrease(counterStore1)}
      >
        +2
      </button>

      <ResetBtn counterStore={counterStore1} />

      <div>count is {counterStore1.counter}</div>
    </div>
  )
}

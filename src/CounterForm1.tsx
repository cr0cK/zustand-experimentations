import ResetBtn from './ResetBtn'
import { useAppStore, useCounterStore1 } from './zustand/AppStore'

export interface ICounterForm2Props {}

export default function CounterForm2(props: ICounterForm2Props) {
  const counterStore1 = useCounterStore1()
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

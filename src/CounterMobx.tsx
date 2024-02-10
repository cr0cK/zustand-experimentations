import { observer } from 'mobx-react-lite'
import { useMemo } from 'react'
import { AppStore, createCounterStore } from './mobx/counterStore'

export interface ICounterMobxProps {}

function CounterMobx(props: ICounterMobxProps) {
  const appStore = useMemo(() => {
    return new AppStore().setCounterStore(createCounterStore())
  }, [])

  return (
    <div className="card">
      <button type="button" onClick={() => appStore.increaseCounter()}>
        +1
      </button>

      <button type="button" onClick={() => appStore.resetCounter()}>
        Reset
      </button>

      <div>count is {appStore.counterStore?.counter}</div>
    </div>
  )
}

export default observer(CounterMobx)

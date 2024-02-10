import { CounterStore } from './zustand/AppStore'

export interface IResetBtnProps {
  counterStore: CounterStore
}

export default function ResetBtn(props: IResetBtnProps) {
  return (
    <div>
      <button type="button" onClick={() => props.counterStore.reset()}>
        Reset
      </button>
    </div>
  )
}

import { useAppStore } from './stores/AppStore'

export interface IResetBtnProps {}

export default function ResetBtn() {
  const appStore = useAppStore()

  return (
    <div>
      <button type="button" onClick={() => appStore.reset()}>
        Reset
      </button>
    </div>
  )
}

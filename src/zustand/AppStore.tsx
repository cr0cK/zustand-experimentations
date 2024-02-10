import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ICounterStoreState {
  counter: number
  increase: (by: number) => void
  reset: () => void
}

interface ICounterStoreActions {
  increase: (by: number) => void
  reset: () => void
}

export type CounterStore = ICounterStoreState & ICounterStoreActions

export const counterStoreFactory = () =>
  create<CounterStore>()(
    devtools(
      immer(set => ({
        counter: 0,

        increase: by => {
          set(state => {
            state.counter += by
          })
        },

        reset: () => set({ counter: 0 })
      }))
    )
  )

export const useCounterStore1 = counterStoreFactory()
export const useCounterStore2 = counterStoreFactory()

interface IAppStoreState {
  doubleIncrease: (counterStore: CounterStore) => void
}

export const useAppStore = create<IAppStoreState>()(() => ({
  doubleIncrease: (counterStoreState: CounterStore) => {
    counterStoreState.increase(2)
  }
}))

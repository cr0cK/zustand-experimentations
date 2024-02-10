import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IAppState {
  counter: number
  increase: (by: number) => void
  reset: () => void
}

interface IAppActions {
  increase: (by: number) => void
  reset: () => void
}

export const useAppStore = create<IAppState & IAppActions>()(
  devtools(
    immer(set => ({
      counter: 0,

      increase: by =>
        set(state => {
          state.counter += by
        }),

      reset: () => set({ counter: 0 })
    }))
  )
)

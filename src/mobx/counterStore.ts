import { makeAutoObservable } from 'mobx'

type CounterStore = ReturnType<typeof createCounterStore>

/**
 * MobX store, functional style.
 */
export const createCounterStore = () => {
  const store = {
    counter: 0,

    increase() {
      this.counter += 1
    },

    reset() {
      this.counter = 0
    }
  }

  makeAutoObservable(store)

  return store
}

/**
 * MobX store, POO stype.
 */
export class AppStore {
  counterStore: CounterStore | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setCounterStore(counterStore: CounterStore) {
    this.counterStore = counterStore
    return this
  }

  increaseCounter() {
    this.counterStore?.increase()
  }

  resetCounter() {
    this.counterStore?.reset()
  }
}

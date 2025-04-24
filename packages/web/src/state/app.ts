import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface AppState {
  count: number
}

export interface AppActions {
  increase: () => void
  reduce: () => void
}

export type AppStore = AppState & AppActions

export type AppStoreSetFunction = (set: AppStore) => AppStore | Partial<AppStore>

// persist

export const useAppStore = create<AppStore>()(
  devtools(
    // persist(
    (set, get) => ({
      count: 0,
      increase: () => {
        set(state => ({
          count: state.count + 1,
        }))
      },
      reduce: () => {
        set({
          count: get().count - 1,
        })
      },
    }),
    // { name: 'appstore' },
    // ),
  ),
)

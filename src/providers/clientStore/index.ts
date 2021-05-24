import produce, { Draft } from "immer";
import create, { State, StateCreator } from "zustand";
import { Actions } from "./ClientStore.actions";
import { ClientDispatch } from "./ClientStore.dispatch";
import { ClientState, initialClientState } from "./ClientStore.initialState";
import reducer from "./ClientStore.reducer";
import { persist } from "zustand/middleware";

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce(fn) as (state: T) => T), get, api);

export const useStore = create<ClientState & ClientDispatch>(
  persist(
    immer((set) => ({
      ...initialClientState,
      dispatch: (args: Actions) => set((state) => reducer(state, args)),
    })),
    {
      name: "clientStore",
    }
  )
);

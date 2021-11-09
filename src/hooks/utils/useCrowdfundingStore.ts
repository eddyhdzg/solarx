import produce, { Draft } from "immer";
import create, { State, StateCreator } from "zustand";
import { Actions } from "providers/pagesStores/crowdfundingStore/CrowdfundingStore.actions";
import { CrowdfundingDispatch } from "providers/pagesStores/crowdfundingStore/CrowdfundingStore.dispatch";
import {
  CrowdfundingState,
  initialCrowdfundingState,
} from "providers/pagesStores/crowdfundingStore/CrowdfundingStore.initialState";
import reducer from "providers/pagesStores/crowdfundingStore/CrowdfundingStore.reducer";

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce(fn) as (state: T) => T), get, api);

const useStore = create<CrowdfundingState & CrowdfundingDispatch>(
  immer((set) => ({
    ...initialCrowdfundingState,
    dispatch: (args: Actions) => set((state) => reducer(state, args)),
  }))
);

export default useStore;

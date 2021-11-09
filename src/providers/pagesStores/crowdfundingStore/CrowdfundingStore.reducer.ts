import { Actions } from "./CrowdfundingStore.actions";
import { CrowdfundingState } from "./CrowdfundingStore.initialState";

const reducer = (draft: CrowdfundingState, action: Actions) => {
  switch (action.type) {
    case "PAYMENT_TOGGLE_LOADING":
      draft.payment.loading = action.payload;
      break;
    case "METHOD_TOGGLE_LOADING":
      draft.method.loading = action.payload;
      break;
    case "METHOD_TOGGLE_OPEN":
      draft.method.open = action.payload;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;

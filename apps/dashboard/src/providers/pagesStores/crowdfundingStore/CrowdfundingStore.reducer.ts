import { Actions } from "./CrowdfundingStore.actions";
import { CrowdfundingState } from "./CrowdfundingStore.initialState";

const reducer = (draft: CrowdfundingState, action: Actions) => {
  switch (action.type) {
    case "ALERT_TOGGLE_OPEN":
      draft.alert.open = action.payload;
      break;
    case "ALERT_SEND_DATA":
      draft.alert = { ...action.payload, open: true };
      break;
    case "PAYMENT_TOGGLE_PROCESSING":
      draft.payment.processing = action.payload;
      break;
    case "METHOD_TOGGLE_LOADING":
      draft.method.loading = action.payload;
      break;
    case "METHOD_TOGGLE_OPEN":
      draft.method.open = action.payload;
      break;
    case "METHOD_TOGGLE_PROCESSING":
      draft.method.processing = action.payload;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;

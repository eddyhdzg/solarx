import { Actions } from "./ClientStore.actions";
import { ClientState } from "./ClientStore.initialState";

const reducer = (draft: ClientState, action: Actions) => {
  switch (action.type) {
    case "THEME_SET_THEME":
      draft.themeType = action.payload;
      break;
    case "DRAWER_TOGGLE_DRAWER":
      draft.drawer = action.payload;
      break;
    case "LOCALE_TOGGLE_LOCALE":
      draft.locale = action.payload;
      break;
    case "ROUTERMEMO_UPDATE_MEMO":
      draft.routerMemo[action.payload.key] = action.payload.route;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;

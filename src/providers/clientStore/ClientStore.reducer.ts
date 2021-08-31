import { Actions } from "./ClientStore.actions";
import { ClientState } from "./ClientStore.initialState";

const reducer = (draft: ClientState, action: Actions) => {
  switch (action.type) {
    case "BACKBUTTON_CHANGE_DATA":
      draft.backButton = action.payload;
      break;
    case "LOCALE_TOGGLE_LOCALE":
      draft.locale = action.payload;
      break;
    case "PROJECTS_TOGGLE_TYPE":
      draft.projects.projectType = action.payload;
      break;
    case "PROJECTS_CHANGE_PAGESIZE":
      draft.projects.pageSize = action.payload;
      break;
    case "USERS_CHANGE_PAGESIZE":
      draft.projects.pageSize = action.payload;
      break;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;

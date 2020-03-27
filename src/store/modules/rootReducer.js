import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer;";
import noticias from "./noticias/reducer";
import acoes from "./acoes/reducer";

export default combineReducers({
  auth,
  user,
  noticias,
  acoes
});

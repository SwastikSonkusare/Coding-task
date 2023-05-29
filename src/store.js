import { createStore } from "redux";

import "./reducers";
import { reducer } from "./reducers";

export const store = createStore(reducer);

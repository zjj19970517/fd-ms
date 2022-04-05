import { Module } from "vuex";

import state from "./state";
import mutations from "./mutation";
import actions from "./actions";
import type { UserState } from "./state";
import type { RootState } from "../../type";

const moduleName = "user";

const store: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default store;

export { state, moduleName };
export type { UserState };

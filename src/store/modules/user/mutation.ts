import { MutationTree } from "vuex";

import MutationTypes from "./mutation-types";
import type { UserState } from "./state";

const mutations: MutationTree<UserState> = {
  [MutationTypes.STORAGE_TOKEN](state, token) {
    state.token = token;
  },
};

export default mutations;

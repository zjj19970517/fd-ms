import { createStore } from "vuex";
import userStore, { moduleName as userModuleName } from "./modules/user";

export default createStore({
  modules: {
    [userModuleName]: userStore,
  },
});

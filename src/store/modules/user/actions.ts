import { ActionTree } from "vuex";

import MutationTypes from "./mutation-types";
import type { UserState } from "./state";
import type { RootState } from "../../type";

interface LoginParams {
  username: string;
  password: string;
}

const actions: ActionTree<UserState, RootState> = {
  /**
   * 登录
   * @param param0 当前 store 上下文
   * @param loginParams 登录参数
   * @returns
   */
  login({ commit }, loginParams: LoginParams): Promise<string> {
    const { username, password } = loginParams;
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("模拟登录", username, password);
        const Token = "XX--Token";
        commit(MutationTypes.STORAGE_TOKEN, Token);
        resolve(Token);
      }, 100);
    });
  },
};

export default actions;

import { moduleName as userModuleName } from "./modules/user";
import type { UserState } from "./modules/user";

interface RootState {
  [userModuleName]: UserState;
}

export type { RootState };

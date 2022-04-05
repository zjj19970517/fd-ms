export interface UserInfo {
  username?: string;
  nickname?: string;
}

export interface UserState {
  token: string;
  userInfo: UserInfo;
}

const state: () => UserState = () => ({
  token: "",
  userInfo: {},
});

export default state;

import { validatePassword } from "../../common/utils/validate";

export const LoginFormRules = {
  username: [
    {
      required: true,
      trigger: "blur",
      message: "请先输入用户名",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword(),
    },
  ],
};

/**
 * 是否为外部资源
 * @param url 资源地址
 * @returns
 */
export const isExternalResource = (url: string): boolean => {
  return /^(https?:|mailto:|file:)/.test(url);
};

/**
 * 校验密码
 * 1. 字数 >= 6
 * @returns
 */
export const validatePassword = () => {
  return (
    rule: Array<Record<string, unknown>>,
    value: string,
    callback: (error?: Error) => void
  ): void => {
    if (value.length < 6) {
      callback(new Error("密码不能少于6位"));
    } else {
      callback();
    }
  };
};

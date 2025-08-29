const regs = {
  email: /^\w+([\.\w+]*)\w+@([\w-]+\.)+\w+$/,
  number: /^(0|[1-9][0-9]*)$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{8,18}$/,
};

// 为回调函数定义类型，通常在 Ant Design Vue 或 Element UI 中使用
type Callback = (error?: Error) => void;


const verify = (rule: any, value: string | null | undefined, reg: RegExp, callback: Callback): void => {
  if (value) {
    if (reg.test(value)) {
      callback();
    } else {
      // 假设 rule 包含 message 属性，用于生成错误信息
      // 如果 rule 没有 message 属性，您可能需要根据实际情况修改
      callback(new Error(rule.message || 'Validation failed'));
    }
  } else {
    // 如果值为空，通常不视为错误，直接通过
    callback();
  }
};

// 定义一个接口来描述导出的对象结构
interface Validator {
  (rule: any, value: string | null | undefined, callback: Callback): void;
}

const validators: { [key: string]: Validator } = {
  email: (rule, value, callback) => {
    return verify(rule, value, regs.email, callback);
  },
  number: (rule, value, callback) => {
    return verify(rule, value, regs.number, callback);
  },
  password: (rule, value, callback) => {
    return verify(rule, value, regs.password, callback);
  },
};

export default validators;
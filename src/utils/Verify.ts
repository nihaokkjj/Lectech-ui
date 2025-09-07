const regs = {
  email: /^\w+([\.\w+]*)\w+@([\w-]+\.)+\w+$/,
  number: /^(0|[1-9][0-9]*)$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{8,18}$/,
  phone: /^1[345789]\d{9}$/,
};

const verify = (rule: RegExp, value: string | null | undefined, msg: string) => {
  if (!value) {
    return '验证失败'
  } else if(rule.test(value)){
    return ''
  } else {
    return msg
  }
};

// 定义一个接口来描述导出的对象结构
interface Validator {
  (value: string | null | undefined, msg: string): string | null;
}

const validators: { [key: string]: Validator } = {
  email: (value, msg) => {
    return verify(regs.email, value, msg);
  },
  number: ( value, msg) => {
    return verify(regs.number, value, msg);
  },
  password: ( value, msg) => {
    return verify(regs.password, value, msg);
  },
  phone: (value, msg) => {
    return verify(regs.phone, value, msg);
  },
};

export default validators;
type IToUpperCase = {
  str: string;
};

export const toUpperCase = ({ str }: IToUpperCase) => {
  return str.toUpperCase();
};

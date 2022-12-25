type IToUpperCase = {
  str: string;
  length: number;
  hasDashes: boolean;
  size: number;
};

export const toUpperCase = ({ str, length, hasDashes, size }: IToUpperCase) => {
  return str.toUpperCase();
};

toUpperCase({
  str: "hello",
  length: 5,
  hasDashes: true,
  size: 10,
});

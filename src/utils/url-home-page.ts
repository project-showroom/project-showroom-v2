export const urlHomePage = (to: string) => {
  return new URL(`${process.env.NEXT_PUBLIC_URL}/${to}`);
};

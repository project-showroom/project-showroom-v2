export const urlHomePage = (to: string | undefined) => {
  return new URL(`${process.env.NEXT_PUBLIC_URL}/${to}`);
};

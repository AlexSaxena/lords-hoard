export const generateRandomString = () => {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return result;
};

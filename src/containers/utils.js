export const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;


export const isExpiredTime = (expiredTime) => {
  const expired = new Date(expiredTime);
  const now = new Date();
  return now.getTime() - expired.getTime() > 0;
};
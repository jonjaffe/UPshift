export const asArray = (state) => {
  return Object.keys(state).map(key => state[key]);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SUBTRACT":
      return { count: state.count - 1 };

    case "ADD":
      return { count: state.count + 1 };

    case "RESET":
      return { count: (state.count = 0) };

    default:
      return state;

    //throw new error() is lehet a default érték
  }
};

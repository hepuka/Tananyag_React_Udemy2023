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

  /*     //az action-ben a dispatch-ra hivatkozunkt
    if (action.type === "SUBTRACT") {
      //   console.log("Subtract action");
      //   console.log(action.payload);

      return {
        count: state.count - 1,
      };
    }

    if (action.type === "ADD") {
      return {
        count: state.count + 1,
      };
    }

    if (action.type === "RESET") {
      return {
        count: (state.count = 0),
      };
    }

    return state; */
};

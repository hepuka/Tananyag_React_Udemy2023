import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showtext: state.showText };
    case "toggleShowText":
      return { count: state.count, showtext: !state.showText };

    default:
      return state;
  }
};

const Count2 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Click here
      </button>
      {state.showText && <p> This is a text</p>}
    </div>
  );
};

export default Count2;

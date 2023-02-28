import React, { useReducer } from "react";

// dispatch - replaces setCount() and tells the reducer function what to do
// payload - sends some information to the reducer function

const UseReducerBasics = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
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

  //const [count, setCount] = useState(0); nem kell ha van useReducer

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubtract = () => {
    //setCount(count - 1);
    //const id = "12345";
    dispatch({
      type: "SUBTRACT", //egy property-t meg kell adni
      // payload: id, - opcionális
    });
  };

  const handleReset = () => {
    //setCount(0);
    dispatch({
      type: "RESET",
    });
  };

  const handleAdd = () => {
    // setCount(count + 1);
    dispatch({
      type: "ADD",
    });
  };

  return (
    <div>
      <section className="--flex-center --100vh --bg-primary">
        <div className="container --bg-light --p2 --m2 --center-all">
          <h3>React Counter Page</h3>

          <h1>{state.count}</h1>

          <div className="buttons --flex-center">
            <button className="--btn --btn-danger" onClick={handleSubtract}>
              Subtract
            </button>
            <button className="--btn" onClick={handleReset}>
              Reset
            </button>
            <button className="--btn --btn-primary" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseReducerBasics;

import React, { useReducer } from "react";

// dispatch - replaces setCount() and tells the reducer function what to do
// payload - sends some information to the reducer function

const UseReducerBasics = () => {
  //külön definiáljuk az initialstate-et és a reducer function-t a state-hez
  const initialState = {
    count: 0,
    payload: 0,
    mov: "",
  };

  const reducer = (state, action) => {
    //az action-ben a dispatch-ra hivatkozunk
    switch (action.type) {
      case "SUBTRACT":
        return {
          count: state.count - 1,
          payload: action.payload,
          mov: action.mov,
        };

      case "ADD":
        return {
          count: state.count + 1,
          payload: action.payload,
          mov: action.mov,
        };

      case "RESET":
        return {
          count: (state.count = 0),
          payload: action.payload,
          mov: action.mov,
        };

      default:
        return state;

      //throw new error() is lehet a default érték
    }
  };

  //state az initialstate állapotát tárolja
  // dispatch egy referencia arra, hogy milyen művelet hajtódjon végre amivel módosítjuk a state változót

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubtract = () => {
    //setCount(count - 1);

    const id = "11";
    const movm = "subtract";
    dispatch({
      type: "SUBTRACT", //egy property-t meg kell adni
      payload: id,
      mov: movm,
      /* - opcionális, ha innen az alfüggvényből pl. egy id-t is át akarunk adni a fő reducer függvénynek. Ott az action.payload-al tudunk erre hivatkozni*/
    });
  };

  const handleReset = () => {
    //setCount(0);
    const id = "10";
    const movm = "reset";
    dispatch({
      type: "RESET",
      payload: id,
      mov: movm,
    });
  };

  const handleAdd = () => {
    // setCount(count + 1);
    const id = "12";
    const movm = "adding";
    dispatch({
      type: "ADD",
      payload: id,
      mov: movm,
    });
  };

  return (
    <div>
      <section className="--flex-center --100vh --bg-primary">
        <div className="container --bg-light --p2 --m2 --center-all">
          <h3>React Counter with useReducer</h3>

          <h1>Számláló: {state.count}</h1>
          <h3>Művelet: {state.mov}</h3>
          <h3>Művelet azonosító: {state.payload}</h3>

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

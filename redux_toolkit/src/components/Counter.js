import { useSelector, useDispatch } from "react-redux";
import { ADD, ADD_NUMBER, SUBTRACT, RESET } from "../store/slice/counterSlice";
import { TOGGLE_AUTH } from "../store/slice/authSlice";

const Counter = () => {
  /*state.counter.count az a counter amit a store.js reducer objektum egyik property-jének a neve, és a count a counterSlice-ban lévő initialstate objektum property-je */
  const count = useSelector((state) => state.counter.count);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  const dispatch = useDispatch();

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button
          className="--btn --btn-danger"
          onClick={() => dispatch(TOGGLE_AUTH())}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        <hr />

        {!isLoggedIn ? (
          <p>Please Log In</p>
        ) : (
          <>
            <h3>React Counter App</h3>
            <h1>{count}</h1>
            <div className="buttons --flex-center">
              <button
                className=" --btn --btn-danger"
                onClick={() => dispatch(SUBTRACT())}
              >
                Subtract
              </button>
              <button className=" --btn" onClick={() => dispatch(RESET())}>
                Reset
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD())}
              >
                Add
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD_NUMBER(5))}
              >
                Add 5
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Counter;

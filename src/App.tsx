import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          {" "}
          <div className="text-xl font-bold text-center bg-orange-500 text-white p-3 mb-10 h-10 w-16 rounded shadow-lg shadow-orange-300  flex justify-center items-center mx-auto">
            {count}
          </div>
          <div className="flex items-center justify-center mb-5">
            <button
              className="p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mr-2"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              className="p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ml-2"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mr-2"
              onClick={() => dispatch(decrementByAmount(50))}
            >
              Decrement (50)
            </button>

            <button
              className="p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg ml-2"
              onClick={() => dispatch(incrementByAmount(100))}
            >
              Increment (100)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

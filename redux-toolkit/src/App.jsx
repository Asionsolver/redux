import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { increment, decrement } from "./features/counterSlice";


function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  

  const increment = (id) => {
    dispatch(increment( id ));
  };

  const decrement = (id) => {
    dispatch(decrement( id ));
  };

  const totalCount = () => {
    return counters.reduce((total, counter) => total + counter.count, 0);
  };

 
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((count) => (
          <Counter
            count={count.count}
            key={count.id}
            id={count.id}
            increment={increment}
            decrement={decrement}
          />
        ))}
        <Stats count={totalCount()}/>
      </div>
    </div>
  );
}

export default App;

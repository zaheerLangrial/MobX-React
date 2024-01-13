import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

const Count = observer(() => {
  const {
    rootStore: { countStore },
  } = useStore();
  return (
    <div>
      <p>{countStore.count}</p>
      <div>
        <button onClick={countStore.increment}>+</button>
        <button onClick={countStore.decrement}>-</button>
        <button onClick={countStore.reset}>Reset</button>
      </div>
    </div>
  );
});

export default Count;

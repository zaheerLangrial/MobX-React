import { useStore } from "../Hooks/useStore";
import { observer } from "mobx-react-lite";

const Count = observer(()=> {
  const {
    rootStore: { countStore },
  } = useStore();

  const onInCrement = () => {
    countStore.increment();
  };

  const OnDecrement = () => {
    countStore.decrement();
  };
  return (
    <div>
      count : {countStore.getCountValue}
      <div>
        <button onClick={onInCrement}>Click For plus</button>
        <button onClick={OnDecrement}>Click Me</button>
      </div>
    </div>
  );
});

export default Count;

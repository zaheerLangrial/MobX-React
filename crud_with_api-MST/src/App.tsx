// App.js
import { RootStoreProvider } from './contexts/RootStoreContext';
import ItemComponent from './components/Items';

function App() {
  return (
    <RootStoreProvider>
      <ItemComponent />
    </RootStoreProvider>
  );
}

export default App;


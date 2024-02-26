// hooks/useRootStore.js
// import { useContext } from 'react';
// import { RootStoreContext } from '../contexts/RootStoreContext';

// const useRootStore = () => {
//   return useContext(RootStoreContext);
// };

// export default useRootStore;


import {useContext} from 'react'
import { RootStoreContext } from '../contexts/RootStoreContext'

const useRootStore = () => {
    return useContext(RootStoreContext)
}
export default useRootStore

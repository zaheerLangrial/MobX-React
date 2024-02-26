// // contexts/RootStoreContext.js
// import React, { createContext } from 'react';
// import RootStore from '../stores/RootStore';

import React, { createContext } from "react";
import RootStore from "../stores/RootStore";

// const rootStore = RootStore.create();

// export const RootStoreContext = createContext(rootStore);

// export const RootStoreProvider = ({ children  } : any) => {
//   return React.createElement(RootStoreContext.Provider, { value: rootStore }, children);
// };

// import React , {createContext} from "react";
// import RootStore from '../stores/RootStore';

// const rootStore = RootStore.create();

// export const RootStoreContext = createContext(rootStore);

// export const RootStoreProvider = ({children} : any) => {
//     return React.createElement(RootStoreContext.Provider , {value : rootStore} , children);
// };


const rootStore = RootStore.create();


export const RootStoreContext = createContext(rootStore);

export const RootStoreProvider = ({children} : any) => {
    return React.createElement(RootStoreContext.Provider , {value : rootStore} , children);
};


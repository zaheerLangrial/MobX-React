import { createContext } from "react";
import { RootStore } from "./RootStore";

export const rootstoreContext = createContext ({
    rootStore : new RootStore () ,
})
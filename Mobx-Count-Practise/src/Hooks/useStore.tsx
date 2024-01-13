import { useContext } from "react";
import { rootstoreContext } from "../store";

export const useStore = () => useContext(rootstoreContext)
import { countStore } from "./CountStore";

export interface IRootStore {
    countStore : countStore;
}

export class RootStore implements IRootStore {
    countStore: countStore;


    constructor () {
        this.countStore = new countStore(this);
    }
}
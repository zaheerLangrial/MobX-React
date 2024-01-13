import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./rootStore";

export class countStore {
    count : number = 0;
    rootStore : IRootStore; 


    constructor (rootStore : IRootStore) {
        makeObservable(this , {
            count : observable,
            increment : action,
            decrement : action,
            getCountValue : computed
        });
        this.rootStore = rootStore;
    }

    increment = () => {
        this.count++
    }

    decrement = () => {
        this.count--
    }


    get getCountValue () {
        return this.count
    }
}
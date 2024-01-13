import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export class CountStore {
    count : number = 0;
    countStore : IRootStore



    constructor (countStore : IRootStore) {
        makeObservable (this , {
            count : observable,
            increment : action,
            decrement : action,
            reset : action,
            getCountValue : computed,
        })
        this.countStore = countStore
    }

    increment = () => {
        this.count++;
    }
    decrement = () => {
        this.count--;
    }
    reset = () => {
        this.count = 0
    }

    get getCountValue () {
        return this.count
    }
}
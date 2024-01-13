import { makeObservable, observable } from "mobx";
import { IRootStore } from "./rootStore";

export class countStore {
    count : number = 0;
    rootStore : IRootStore




    constructor (rootStore : IRootStore) {
        makeObservable (this , {
            count : observable,
        })
        this.rootStore = rootStore
    } 


    increment = () => {
        this.count ++;
    }

    decrement = () => {
        if (this.count > 0) {
            this.count --
        }
    }

    reset = () => {
        this.count = 0
    }

    get getCountValue () {
        return this.count;
    }
}

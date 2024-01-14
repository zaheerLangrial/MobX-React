import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./rootStore";
import axios from "axios";

export interface IUserDetails {
    id : number ;
    name : string;
    url : string;
    login : string;
}

export class GitHubUserDetialStore {
    UserDetial : IUserDetails = {} as IUserDetails
    rootStore : IRootStore


    constructor (rootStore : IRootStore) {
        makeObservable(this , {
            UserDetial : observable,
            fetchUserDetail : action,
            getUserDetail : computed,
        })
        this.rootStore = rootStore;
    }

    async fetchUserDetail (useName : string) {
        const res = await axios.get(`https://api.github.com/users/${useName}`)
        this.UserDetial = res?.data
    }

    get getUserDetail () {
        return this.UserDetial;
    }
}
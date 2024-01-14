import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./rootStore";

export class LoginStore {
    loginToken : string = '';
    rootStore : IRootStore;


    constructor (rootStore : IRootStore) {
        makeObservable(this , {
            loginToken : observable,
            fetchUserToken : action,
            getUserToken : computed,
        });
        this.rootStore = rootStore
    }

    logout () {
        return this.loginToken = '';
    }

    async fetchUserToken (userName : string , password : number) {
        const userData = {
            username : userName,
            password : password,
        };
        const  tokenRes = await axios.post('https://fakestoreapi.com/auth/login' , userData)
        this.loginToken = tokenRes.data.token

    }

    get getUserToken () {
        return this.loginToken
    }
}
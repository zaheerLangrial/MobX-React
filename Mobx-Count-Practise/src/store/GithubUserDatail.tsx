import { makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import axios from "axios";

export interface IUserDetail {
    name : string;
    id : number;
    url : string;
    login: string
}
export class GitHubUserDetial {
    githubUserDetial : IUserDetail = {} as IUserDetail
    rootStore : IRootStore

    constructor (rootStore : IRootStore) {
        makeObservable (this , {
            githubUserDetial : observable,
        })
        this.rootStore = rootStore
    }

    async fetchUserDetial (userName : string) {
        const res = await axios.get(`https://api.github.com/users/${userName}`)
        this.githubUserDetial = res?.data
    }

    get GetGitHubUserDetail () {
        return this.githubUserDetial;
    }
}
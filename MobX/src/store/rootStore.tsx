import { countStore } from "./CountStore";
import { GitHubUserDetialStore } from "./GitHubUserDetailStore";

export interface IRootStore {
    countStore : countStore;
    githubUserDetail : GitHubUserDetialStore;
}


export class RootStore implements IRootStore {
    countStore: countStore; 
    githubUserDetail : GitHubUserDetialStore


    constructor () {
        this.countStore = new countStore(this);
        this.githubUserDetail = new GitHubUserDetialStore(this)
    }
}















// import { countStore } from "./CountStore";

    // export interface IRootStore {
    //     countStore : countStore
    // }

    // export class RootStore implements IRootStore {
    //     countStore : countStore;


    //     constructor () {
    //         this.countStore = new countStore(this)
    //     }

    // }




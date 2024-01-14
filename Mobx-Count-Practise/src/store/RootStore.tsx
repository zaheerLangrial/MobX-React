import { CountStore } from "./CountStore";
import { GitHubUserDetial } from "./GithubUserDatail";

export interface IRootStore {
    countStore : CountStore;
    githubUserDetial : GitHubUserDetial
}

export class RootStore implements IRootStore {
    countStore: CountStore;
    githubUserDetial : GitHubUserDetial


    constructor () {
        this.countStore = new CountStore(this);
        this.githubUserDetial = new GitHubUserDetial(this)
    }
}
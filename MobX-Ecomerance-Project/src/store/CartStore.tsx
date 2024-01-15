import { action, computed, makeObservable, observable } from "mobx";
import { ProductRoot } from "../components/Card";
import { IRootStore } from "./rootStore";

export class CartStore {
    cartProducts : ProductRoot[] = []
    rootStore : IRootStore;
    
    
    constructor (rootStore : IRootStore) {
        makeObservable(this , {
            cartProducts : observable,
            addToCartProduct : action,
            getAllCartProducts : computed,
        })
        this.rootStore = rootStore
    }

    addToCartProduct (product : ProductRoot) {
        this.cartProducts.push(product)
    }

    get getAllCartProducts () {
        return this.cartProducts
    }
}
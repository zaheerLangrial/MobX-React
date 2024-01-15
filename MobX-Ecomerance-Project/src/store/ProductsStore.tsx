import { action, computed, makeObservable, observable } from "mobx"
import { IRootStore } from "./rootStore"
import axios from "axios";

export class ProductsStore {
    products = []
    rootStore : IRootStore;


    constructor (rootStore : IRootStore) {
        makeObservable (this , {
            products : observable,
            fetchProducts : action,
            getProducts : computed,
        })
        this.rootStore = rootStore
    }


    async fetchProducts () {
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log(res.data)
        this.products = res.data
    }


    get getProducts () {
        return this.products;
    }



}
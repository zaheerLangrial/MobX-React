import {types , flow } from 'mobx-state-tree';
import ItemModel from '../../models/ItemModel'
import axios from 'axios';


const ItemStore = types.model('items' , {
    id : types.string,
    name : types.string,
    description : types.string
})
.actions ((self) => ({
    fetchItems : flow(function* fetchItems() {
        const res = yield axios.get('https://fakestoreapi.com/products')
        // const data = res.data
        // self.items = data.map((item) => ({
        //     id : item.id.toString(),
        //     name : item.title,
        //     description : item.description
        // }))
    }),
}))


export default ItemStore;
import {types , flow } from 'mobx-state-tree';
import ItemModel from '../../models/ItemModel'
import axios from 'axios';


const ItemStore = types.model('ItemStore' , {
    items : types.array(ItemModel)
})
.actions ((self) => ({
    fetchItems : flow (function* fetchItems () {
        const res = yield axios.get('')
    })
}))
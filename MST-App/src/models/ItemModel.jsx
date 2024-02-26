import {types} from 'mobx-state-tree';

const ItemModel = types.model('ItemModel' , {
    id : types.string,
    name : types.string,
    description : types.string
});
export default ItemModel;
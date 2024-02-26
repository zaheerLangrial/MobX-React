// import { types } from 'mobx-state-tree';

// const ItemModel = types.model('Item', {
//   id: types.identifier,
//   name: types.string,
//   description: types.string,
// });

// export default ItemModel;

// import {types} from 'mobx-state-tree'

// const ItemModels = types.model('Item' , {
//     id : types.identifier,
//     name : types.string,
//     description : types.string,
// })

// export default ItemModels






import {types} from 'mobx-state-tree'

const ItemModel = types.model('Item' , {
    id : types.identifier,
    name : types.string,
    description : types.string
})

export default ItemModel;
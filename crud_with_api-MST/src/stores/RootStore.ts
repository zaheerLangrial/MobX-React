// import { types } from 'mobx-state-tree';
// import ItemStore from './ItemStore';

// const RootStore = types.model('RootStore', {
//   itemStore: types.optional(ItemStore, {}),
// });

// export default RootStore;

// import {types} from 'mobx-state-tree';
// import ItemStore from './ItemStore';

// const RootStore = types.model('RootStore' , {
//     itemStore : types.optional(ItemStore , {})
// })

// export default RootStore;


import { types } from 'mobx-state-tree'
import ItemStore from './ItemStore'

const RootStore = types.model('RootStore' , {
    itemStore : types.optional(ItemStore , {})
})

export default RootStore;

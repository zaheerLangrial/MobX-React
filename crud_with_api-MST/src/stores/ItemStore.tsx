import {flow, types} from 'mobx-state-tree'
import ItemModel from '../models/ItemModel'
import axios from 'axios'


const ItemStore = types.model('ItemsStore' , {
    items : types.array(ItemModel)
})
.actions((self) => ({
    fetchItems :  flow (function* fetchItems() {
        console.log('FetchData Console')
        const res = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data)
        const data = res.data
        self.items = data.map((item : any) => ({
            id : item.id.toString(),
            name : item.title,
            description : item.body
        }))
    }),
    addItem : (item : any )=> {
        self.items.push(item)
    }
}))

export default ItemStore



















// import {types } from 'mobx-state-tree'
// import ItemModel from '../models/ItemModel'
// import axios from 'axios'


// const ItemStore = types.model('ItemStore' , {
//     items : types.array(ItemModel)
// })
// .actions((self) => ({
//      fetchItems: (async function* fetchItems() {
//         try {
//             const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//             console.log(res.data)
//             self.items = res.data
//         } catch (error) {
            
//         }
//     })
// }))

// export default ItemStore


// import { types, flow } from 'mobx-state-tree';
// import ItemModel from '../models/ItemModel';

// const ItemStore = types
//   .model('ItemStore', {
//     items: types.array(ItemModel),
//   })
//   .actions((self) => ({
//     fetchItems: flow(function* fetchItems() {
//       try {
//         const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = yield response.json();
//         self.items = data.map((item : any) => ({
//           id: item.id.toString(),
//           name: item.title,
//           description: item.body,
//         }));
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     }),
//     addItem: (item : any) => {
//       self.items.push(item);
//     },
//     updateItem: (id : any, updatedItem : any) => {
//       const index = self.items.findIndex((item) => item.id === id);
//       if (index !== -1) {
//         self.items[index] = updatedItem;
//       }
//     },
//     deleteItem: (id: any) => {
//       self.items = self.items.filter((item) => item.id !== id);
//     },
//   }));

// export default ItemStore;
import { observer } from 'mobx-react';
import  useRootStore  from '../hooks/useRootStore';
import { useEffect } from 'react';

const ItemComponent = observer(() => {
    const {itemStore} = useRootStore()

  useEffect(() => {
    itemStore.fetchItems();
    console.log('Trigger....')
  }, [itemStore]);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Item',
      description: 'This is a new item',
    };
    itemStore.addItem(newItem);
  };

//   const updateItem = (id : any) => {
//     const updatedItem = {
//       id,
//       name: 'Updated Item',
//       description: 'This item has been updated',
//     };
//     itemStore.updateItem(id, updatedItem);
//   };

//   const deleteItem = (id : any) => {
//     itemStore.deleteItem(id);
//   };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {itemStore.items.map((item : any) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            {/* <button onClick={() => updateItem(item.id)}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ItemComponent;

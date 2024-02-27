import { observer } from 'mobx-react'
import './App.css'
import { useEffect, useState } from 'react'
import UserStore from './stores/ItemStore/itemStore'

const App = observer(() => {
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await UserStore.fetchUsers();
        setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
    }
    fetchData()
  },[])
  return (
    <div>
      <h2>Users</h2>
      {
        loading ? (
          <div>Loading.....</div>
        ) : (
          <ul>
        {UserStore.users.map((user) => (
          <li key={user.id}>
            <span style={{padding : '0 30px 0 30px'}}>{user.name}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
        )
      }
    </div>
  )
})

export default App

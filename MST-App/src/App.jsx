import { observer } from 'mobx-react-lite'
import './App.css'
import ItemStore from './stores/ItemStore/itemStore'
import { useEffect } from 'react'

const App = observer(() => {
  return (
    <>
      {ItemStore}
    </>
  )
})

export default App

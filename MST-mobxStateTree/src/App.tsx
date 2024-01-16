import { observer } from 'mobx-react-lite'
import './App.css'
import store from './Store/UsersStore'

const App = () => {

  return (
    <>
      <h1>Name {store.usename}</h1>
      <h1>Math : {store.math}</h1>
      <h1>Hindi : {store.hindi}</h1>
      <h2>Total : {store.totalMarks}</h2>
      <h3>Percentage : {store.percentage}</h3>
      <button onClick={() => store.setMath('93')}>InCrease Math Marks</button>
      <button onClick={store.getMathMarks}>Api Call</button>
      {/* Ab mera applysnapshot reh gya method buss baki sab mane over view ly liya  */}
    </>
  )
}

export default observer(App)

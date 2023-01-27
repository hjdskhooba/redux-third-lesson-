import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import Userslist from './components/Userslist';
import ItemUser from "./components/ItemUser";

function App() {
  const dispatch = useDispatch()
  let usersCount = useSelector((store) => store.users.usersCount)
  const [count, setCount] = useState(usersCount)
  return (
    <div>
      <Userslist count={count} setCount={setCount} dispatch={dispatch}/>
      <ItemUser dispatch={dispatch} setCount={setCount} count={count}/>
    </div>
  )
}

export default App
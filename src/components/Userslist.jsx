import React from 'react'
import { deleteUser } from "../redux/reducers/users"
import { useSelector } from 'react-redux';

const Userslist = ({count, setCount, dispatch}) => {
  const users = useSelector((store) => store.users.users)
  return (
    <>
    <h2>users = {count}</h2>
    <ul>
    {
      users.map((item, index) => (
        <li key={item.id}>
          {item.name + ' '}
          {item.age}
          <button type="button" onClick={() => {dispatch(deleteUser(index)), setCount(count - 1)}}>Delete User</button>
        </li>
      ))
    }
    </ul>
    </>
  )
}

export default Userslist
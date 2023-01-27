import React from 'react'
import { addUser } from "../redux/reducers/users"

const ItemUser = ({dispatch, setCount, count}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(e.target[0].value !== '' && e.target[1].value !== ''){
              setCount(count + 1)
              dispatch(addUser(e.target[0].value, e.target[1].value))
            }}}>
            <input type="text" placeholder="name" />
            <input type="number" placeholder="age" />
            <button type="submit">Add</button>
        </form>
    )
}

export default ItemUser
const initialState = {
    users: [
        {
            name: 'Alex',
            age: 20,
            id: 1
        },
        {
            name: 'John',
            age: 24,
            id: 2
        }
    ],
    usersCount: 2,
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD': {
            return {
            ...state,
            users: [...state.users, {
                name: action.name,
                age: action.age,
                    id: state.users[state.users.length - 1].id + 1
                },
            ],
            }
        }
        case 'DELETE': {
            return {
                ...state, 
                users: [...state.users.filter((item, index) => index !== action.playload)]
            }
        }
        default: return state;//postoratsya prodoljit s etogo momenta i razhrenachit dz po bystromu, woo
    }
}

export const addUser = (name, age) => {
    return (dispatch) => {
        return dispatch({type: 'ADD', name: name, age: age})
    }
}

export const deleteUser = (index) => {
    return (dispatch) => {
        dispatch({type: 'DELETE', playload: index})
    }
}
export const changeUser = (name, age) => {
    return (dispatch) => {
        dispatch({type: 'CHANGE', name: name, age: age})
    }
}
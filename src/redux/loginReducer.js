
const SET_EMAIL = "SET_EMAIL",
    SET_PASSWORD = "SET_PASSWORD"

let initialState = {
    email: '',
    password: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }
}

export const setEmail = email => {
    return {
        type: SET_EMAIL,
        email
    }
}
export const setPassword = password => {
    return {
        type: SET_PASSWORD,
        password
    }
}

// export const register = (email, password) => dispatch => {
//     debugger
//     return (
//         auth.createUserWithEmailAndPassword(email, password)
//         .then(auth => {
//             debugger
//             console.log(auth)
//         })
//         .catch(error => alert(error.message))
//     )
// }


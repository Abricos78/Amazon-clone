const SET_USER = 'SET_USER'

let initialState = {
    user: null
}

export let appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export let setUser = user => {
    return {
        type: SET_USER,
        user
    }
}


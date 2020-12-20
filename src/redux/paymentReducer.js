const SET_ERROR = 'SET_ERROR',
    SET_DISABLED = 'SET_DISABLED',
    SET_SUCCEEDED = 'SET_SUCCEEDED',
    SET_PROCESSING = 'SET_PROCESSING',
    SET_CLIENT_SECRET = 'SET_CLIENT_SECRET'

let initialState = {
    error: null,
    disabled: null,
    succeeded: null,
    processing: null,
    clientSecret: null
}

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_DISABLED:
            return {
                ...state,
                disabled: action.disabled
            }
        case SET_SUCCEEDED:
            return {
                ...state,
                succeeded: action.succeeded
            }
        case SET_PROCESSING:
            return {
                ...state,
                processing: action.processing
            }
        case SET_CLIENT_SECRET:
            return {
                ...state,
                clientSecret: action.clientSecret
            }
        default:
            return state
    }
}

export const setError = error => {
    return {
        type: SET_ERROR,
        error
    }
}

export const setDisabled = disabled => {
    return {
        type: SET_DISABLED,
        disabled
    }
} 

export const setSucceeded = succeeded => {
    return {
        type: SET_SUCCEEDED,
        succeeded
    }
}

export const setProcessing = processing => {
    return {
        type: SET_PROCESSING,
        processing
    }
}

export const setClientSecret = clientSecret => {
    return {
        type: SET_CLIENT_SECRET,
        clientSecret
    }
}
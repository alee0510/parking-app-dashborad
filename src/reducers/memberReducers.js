import { TOTAL_USER, GET_USER, NEXT_USER, PREV_USER, 
    GET_PROFILE, NEXT_PROFILE, PREV_PROFILE, GET_ROLES, 
    GET_USER_ERROR, GET_PROFILE_ERROR 
} from '../helpers/actionTypes'

export const getTotalUserReducer = (state = { userTotal : 0}, action) => {
    switch(action.type) {
        case TOTAL_USER :
            return { userTotal : action.payload }
        default : return state
    }
}

export const getUserReducer = (state = { user : [] }, action) => {
    switch(action.type) {
        case GET_USER :
            return { user : action.payload }
        case NEXT_USER :
            return { user : action.payload }
        case PREV_USER :
            return { user : action.payload.reverse() }
        case GET_USER_ERROR : 
            return { user : [] }
        default : return state
    }
}

export const getProfileReducer = (state = { profile : [] }, action) => {
    switch(action.type) {
        case GET_PROFILE :
            return { profile : action.payload }
        case NEXT_PROFILE :
            return { profile : action.payload }
        case PREV_PROFILE :
            return { profile : action.payload.reverse() }
        case GET_PROFILE_ERROR :
            return { profile : [] }
        default : return state
    }
}

export const getUserRoleReducer = (state = { roles : [] }, action) => {
    switch(action.type) {
        case GET_ROLES :
            return { roles : action.payload }
        default : return state
    }
}
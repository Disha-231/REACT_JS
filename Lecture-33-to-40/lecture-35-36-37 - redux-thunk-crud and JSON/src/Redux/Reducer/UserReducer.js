
let initialstate = {
    userList: [],
    error: null
}
const UserReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'add_user':
            return {
                ...state,
                userList: [...state.userList, action.payload],
                error: null
            }
        case 'add_user_error':
            return {
                ...state,
                error: action.payload
            }
        case 'view_user':
            return {
                ...state,
                userList: action.payload,
                error: null
            }
        case 'view_user_error':
            return {
                ...state,
                error: action.payload
            }

        case 'delete_user':

            return {
                ...state,
                userList: state.userList.filter(val => val.id != action.payload),
                error: null
            }
        case 'delete_user_error':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}
export default UserReducer



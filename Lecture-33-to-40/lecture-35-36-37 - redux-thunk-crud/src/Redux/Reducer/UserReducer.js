let initialstate = {
    userList: [],
    error: null
}
const UserReducer = (state = initialstate, Action) => {
    switch (Action.type) {
        case 'add_user':
            return {
                ...state,
                userList: [...state.userList, Action.payload],
                error: null
            }
        case 'add_user_error':
            return {
                ...state,
                error: Action.payload
            }
        case 'view_user':
            return {
                ...state,
                userList: Action.payload,
                error: null
            }
        case 'view_user_error':
            return {
                ...state,
                error: Action.payload
            }

        case 'delete_user':

            return {
                ...state,
                userList: state.userList.filter(val => val.id != Action.payload),
                error: null
            }
        case 'delete_user_error':
            return {
                ...state,
                error: Action.payload
            }


        default:
            return state
    }

}
export default UserReducer
